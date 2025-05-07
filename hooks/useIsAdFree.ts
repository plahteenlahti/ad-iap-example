// useIsAdFree.ts
import { useEffect, useState } from "react";
import Purchases from "react-native-purchases";

export const useIsAdFree = () => {
  const [adFree, setAdFree] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkCustomerEntitlement = async () => {
      try {
        setLoading(true);
        const customerInfo = await Purchases.getCustomerInfo();

        const entitlementActive =
          customerInfo?.entitlements?.active?.["ad_free_ad_free_v1"];
        setAdFree(!!entitlementActive);
      } catch (error) {
        console.error("Error checking customer entitlement:", error);
        setAdFree(false); // Default show ads if error
      } finally {
        setLoading(false);
      }
    };

    checkCustomerEntitlement();
  }, []);

  return { adFree, loading };
};
