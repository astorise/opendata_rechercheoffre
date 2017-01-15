import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    let data = [];
      id=null;
      payload.features.forEach((adresse)=>{
          adresse.properties.lat=adresse.geometry.coordinates[0];
          adresse.properties.long=adresse.geometry.coordinates[1];
          adresse.attributes= adresse.properties;
          adresse.type='adresse';
          adresse.id=adresse.geometry.coordinates.toString();
          data.push(adresse);
 
      });
    payload.data = data;
    delete payload.features;
    return this._super(...arguments);
  },
});
