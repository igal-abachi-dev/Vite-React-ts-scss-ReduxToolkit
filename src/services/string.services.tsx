import qs from 'qs';
import _ from 'lodash';

 const getQueryPart =  (url: string) => {
   const hashStart = url.indexOf('#');
   if (hashStart !== -1) {
     url = url.slice(0, hashStart);
   }

   const queryStart = url.indexOf('?');
   if (queryStart === -1) {
     return '';
   }

   return url.slice(queryStart + 1);
};


export const extractQuery =  (url: string) => {
  if (url === '' ) {
    return  {
      url: '',
      query: ''
    };
  }

  // const separatorIndex = url.indexOf('#');
  // if (separatorIndex === -1) {
  //   return  {
  //     url: '',
  //     query: ''
  //   };
  // }

  return {
    url: url.split('?')[0] || '',
    query: getQueryPart(url)
  };

}

//JSON.stringify(data, null, 4)

//const prefixed = qs.parse('?a=b&c=d', { ignoreQueryPrefix: true });

//qs.stringify(queryString); // , { encode: false , strictNullHandling: true ,  skipNulls: true }


export const GetCurrentQueryString =  ():any => {
  const query = extractQuery(window.location.href).query;
  let qry = (qs.parse(query, { ignoreQueryPrefix: true }) || {});
  return qry;
}
