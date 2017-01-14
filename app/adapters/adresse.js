import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
    host: 'http://api-adresse.data.gouv.fr/',
    defaultSerializer:'adresse',
/*    @method buildURL
    @param {String} modelName
    @param {(String|Array|Object)} id single id or array of ids or query
    @param {(DS.Snapshot|Array)} snapshot single snapshot or array of snapshots
    @param {String} requestType
    @param {Object} query object of query parameters to send for query requests.
    @return {String} url
  */
  buildURL: function(modelName, id, snapshot, requestType, query) {
    var url = this.get('host');
    url +='search/?q=' +query.filter.label;

    return url;
  },

});
