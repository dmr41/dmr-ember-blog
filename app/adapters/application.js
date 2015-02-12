import DS from 'ember-data';
import ENV from "../config/environment";

// export default DS.ActiveModelAdapter.extend({
//   host: ENV.adapterURL
// });
export default DS.ActiveModelAdapter.extend({
  host: "https://aqueous-cove-7722.herokuapp.com/"
});

// export default DS.ActiveModelAdapter.extend({
//   host: ENV.ADAPTER_URL
// });
