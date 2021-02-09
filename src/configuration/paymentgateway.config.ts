import { paypal } from "paypal-rest-sdk";

paypal.configure({
  mode: "sandbox", //sandbox or live
  client_id:
    "ATTL0LheL0K_dyE7KLNHeyImbmB70RpQwvIIETzo4S1FsBG0jK4XGpk2b2HeZXWC1Ui7cd-92gw44Ksc",
  client_secret:
    "EEVvhc-XdXdTqBefJDD64-nTTwYsySoRP4lj7ifWskwLwTwZBnDFjeLKKJanJ7BxdtE-SZY4gpNObbx-",
});
export { paypal };


