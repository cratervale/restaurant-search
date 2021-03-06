import algoliasearch from 'algoliasearch'
const client = algoliasearch('J35NHE0BU6', '73499688fe6cbf89b0e353318fca13bb');
const helper = client.initIndex('restaurants');

export const search = (str, limit, latLng) =>{
  return helper.search({
    query:str,
    hitsPerPage: limit,
    aroundLatLng: latLng
  })
}
