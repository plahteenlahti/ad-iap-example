import { useState } from "react";
import Purchases from "react-native-purchases";

export const usePurchaseSubscription = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const purchaseSubscription = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch available packages
      const offerings = await Purchases.getOfferings();

      if (!offerings.current?.availablePackages.length) {
        throw new Error("No available packages found");
      }

      // Get the monthly subscription package
      const monthlyPackage = offerings.current.availablePackages[0];

      // Purchase the package
      const { customerInfo } = await Purchases.purchasePackage(monthlyPackage);

      // Verify the entitlement
      const adFreeEntitlement =
        customerInfo.entitlements.active["ad_free"];

      return !!adFreeEntitlement;
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    purchaseSubscription,
    loading,
    error,
  };
};
