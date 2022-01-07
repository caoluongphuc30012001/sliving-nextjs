const { Credentials } = require("aws-sdk");
const AWS = require("aws-sdk");

const accessKeyId = process.env.accessKeyId;
const secretAccessKey = process.env.secretAccessKey;
const region = process.env.region;

export const sendMail = async (formData, data, typeEmail = 0) => {
  // typeEmail = 0 => Gửi cho người dùng,
  // typeEmail = 1 => gửi cho sale

  const {
    name,
    email,
    type,
    country,
    phoneNumber,
    companyName,
    jobTitle,
    website,
  } = formData;

  const credentials = new Credentials({ accessKeyId, secretAccessKey });
  const ses = new AWS.SES({
    apiVersion: "2012-10-17",
    credentials,
    region,
  });

  const { html, frontmatter } = data;
  let htmlData = html;
  let emailSent;

  //nôi dung mail gửi cho khách hàng
  if (typeEmail === 0) {
    emailSent = formData.email;
    htmlData = htmlData.replaceAll("$name", name);
  } else {
    // nôi dung mail gửi cho sale
    emailSent = frontmatter.emailForSale;
    htmlData = htmlData.replaceAll("$name", name);
    htmlData = htmlData.replaceAll("$type", type.name);
    htmlData = htmlData.replaceAll("$nation", country.name);
    htmlData = htmlData.replaceAll("$email", email);
    htmlData = htmlData.replaceAll(
      "$phone",
      phoneNumber.prefix + phoneNumber.value
    );
    htmlData = htmlData.replaceAll("$company", companyName);
    htmlData = htmlData.replaceAll("$position", jobTitle);
    htmlData = htmlData.replaceAll("$web", website);
  }

  const params = {
    Destination: {
      ToAddresses: [emailSent], // Email address/addresses that you want to send your email
    },
    //   ConfigurationSetName: <<ConfigurationSetName>>,
    Message: {
      Body: {
        Html: {
          // HTML Format of the email
          Charset: process.env.charset,
          Data: htmlData,
        },
        Text: {
          Charset: process.env.charset,
          Data: "",
        },
      },
      Subject: {
        Charset: process.env.charset,
        Data: process.env.subject,
      },
    },
    Source: process.env.source,
  };

  return ses
    .sendEmail(params)
    .promise()
    .then((data) => {
      return true;
    })
    .catch((error) => {
      console.log(error);
      return false;
    });
};
