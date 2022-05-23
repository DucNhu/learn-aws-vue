const https = require("https");
const axios = require("axios");
const fs = require('fs');

exports.handler = async (event) => {


  let response = await axios({
    method: 'get',
    url: 'https://esg-investment-storage-d22ipokbpiotgv60558-staging.s3.ap-northeast-1.amazonaws.com/public/reports-pdf/6501/cg/2021/%E6%97%A5%E7%AB%8B%E8%A3%BD%E4%BD%9C%E6%89%80_%E3%82%B3%E3%83%BC%E3%83%9D%E3%83%AC%E3%83%BC%E3%83%88%E3%82%AC%E3%83%90%E3%83%8A%E3%83%B3%E3%82%B9%E5%A0%B1%E5%91%8A%E6%9B%B8_2021%E5%B9%B412%E6%9C%88.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZSKHLIU2CTWNFX7Q%2F20220325%2Fap-northeast-1%2Fs3%2Faws4_request&X-Amz-Date=20220325T020919Z&X-Amz-Expires=900&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLW5vcnRoZWFzdC0xIkcwRQIgNK5G16cZRpRy6nl9%2BiQgE0WeRlVKKOkgvsVM3lNB0UQCIQCmZkYfqJnHFhUR%2BCTmiz4WMxtxt5K4a2D2Q3z4RY3XQiriBAhrEAEaDDY1NzgxNjUwMzYwNCIMfs8dpptL6CavKUCWKr8E2BgjeUuKFDNUDGQbDwkmS%2BVvOIBEEaOi7S9G4Ln5YENZbO3Xcp9RzeAk6w3UpFCs2YxA0O1TAU37mKXeoyVF49Pfu%2Fd%2Fpt29KUm9mqXF3wS1lK2hjFckjzlrd%2B2OoX7%2F0qnVf7qJ7Q9Zw%2FQ0zZJkI%2BJdyOTrEMiS%2Bnv8WBZXWM1vGBaeeJbEuyoUFK%2B1WzhcsYjN4acN7G81sgMKZKfF3JKT1HIaOE566WNmpaJUNRybmcxM%2BhLbWUZfbWF6Dksyu7oUKhw6FdM9Kk%2BOnRD7Al%2ByhGxeIIa0PMz16PLA5EI9xeWMPKyxl2XXEfxiHci1uQQjbGhSiUzmulVS%2FizNkjOK8qmO8NYVEFbeRLPaxyfv5%2BZr%2BE4W8kmvAQcCvgAWC6wzoXXGdhcnBkYMq4Z%2FoyAFsBUim%2FvW%2FQQiwuNOYZ%2B2wE98pIlQPc7SWLSXdDKvi5ZNV2DdGSy7xa%2BWzV6n2GkMabghifvJJbXfeJ1g1I4fe7Q%2Fq1z4wOsRhqqtUqoQXzQbdDq6d6TrWhDOmq9YdE5GXMjKByL28Z56x6AOCjvTrbye2VTbY8y%2FCou%2Fp9yRfvwbf9xCInEEAdGGj%2FXl43R8iOD0wnkIyD8fUxbZ5ItEXhi0c%2B5XlZiCqFWjgRZJ9nXAGtQePbs56SOEdkDJmzQUajLzXs%2Fp69ZuQCX1Pkv0GCf%2F%2FsYn9CmUv85Ki%2FnXo0g0O5KqRdtI%2Fzmnx41FQFmSVPowKxFDFSWHMziwJnu5kSjM0B7%2F9FijfjOMM8swz8j0kQY6hQIDPDcOBMfGZWb0y%2FdStEsPAZHCwRc3NyhJpKq%2FD8XD2InHep6Uw%2BT2yZ%2BD5mKiKya2BJhrsgE6CfQ5slnij0yLN22Hq%2BMysRxDO8aGFtyPj4%2FCxmWah3DUSQhCZ1WzWziFPno1cM0OVp0rplLyV%2Bml2OkJokFwMa%2B4GwDRk3UgWKX94lsMgcvlbnogI51C6o2N3T4NBBC%2FpQsdVXiF%2BHCBKnc1eIFMxfRbc6QVEK%2BQxmOIeiDF4H2154aeRPffK%2Bfgmwn8zoOZv2B41YMcPRLmG3X1x2s2CjUh5%2BmL%2FShH5LBZFpzRKv20i0AwUvsSnTSuc8%2BUpgXjn8tdPgTbUBDBcajTzIA%3D&X-Amz-Signature=b841cd4f6cb2f28e93081029fe124570b1781d2e35958524596778ce5cb7991c&X-Amz-SignedHeaders=host&x-amz-user-agent=aws-sdk-js%2F3.6.1%20os%2FWindows%2FNT_10.0%20lang%2Fjs%20md%2Fbrowser%2FChrome_99.0.4844.82%20api%2Fs3%2F3.6.1%20aws-amplify%2F4.3.11_js&x-id=GetObject',
  });

  // TODO implement
  const response2 = {
    statusCode: 200,
    //  Uncomment below to enable CORS requests
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "*",
      'Content-type': 'application/pdf',
    },
    body: response.data,
    isBase64Encoded: true
  };
  return response2;
};