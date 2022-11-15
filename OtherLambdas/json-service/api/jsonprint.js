'use strict';

module.exports.submit = async (event) => {
  const request=JSON.stringify("soumya");
  const perm=JSON.parse(request);
  const resp=perm.toUpperCase();
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: resp,
      },
      null,
      2
    ),
  };
};
