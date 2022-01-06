const {Credentials} = require('aws-sdk');
const AWS = require('aws-sdk');

const accessKeyId = 'AKIA4P4SIDBG2JAJ3BVY';
const secretAccessKey = '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';
const region = 'us-east-1';
const emailForSale = 'hoangph@sunshinegroup.vn';
const host = 'https://sliving.vn/';


export const sendMail = async (formData,data,typeEmail = 0) => {
  // typeEmail = 0 => Gửi cho người dùng, 
  // typeEmail = 1 => gửi cho sale

  const {name, email,type,country,phoneNumber,companyName,jobTitle,website} = formData;

  const credentials = new Credentials({accessKeyId, secretAccessKey});
  const ses = new AWS.SES({
    apiVersion: '2012-10-17',
    credentials,
    region,
  });
  
  const {html,frontmatter} = data;
  const {imgBaner,imgLogo} = frontmatter;
  let htmlData = html;
  let emailSent;

  //nôi dung mail gửi cho khách hàng
  if(typeEmail === 0){
    emailSent = formData.email;
    let urlImg = host+imgBaner.publicURL;
    let urlLogo = host+imgLogo.publicURL;

    htmlData = htmlData.replaceAll('$name',name);
    htmlData = htmlData.replaceAll('$img',`<img src="${urlImg}" alt="banner" />`);
    htmlData = htmlData.replaceAll('$logo',`<img src="${urlLogo}" alt="logo" />`);
  }else{ // nôi dung mail gửi cho sale
    emailSent = emailForSale;
    htmlData = htmlData.replaceAll('$name',name);
    htmlData = htmlData.replaceAll('$type',type);
    htmlData = htmlData.replaceAll('$nation',country);
    htmlData = htmlData.replaceAll('$email',email);
    htmlData = htmlData.replaceAll('$phone',phoneNumber);
    htmlData = htmlData.replaceAll('$company',companyName);
    htmlData = htmlData.replaceAll('$position',jobTitle);
    htmlData = htmlData.replaceAll('$web',website);
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
          Charset: 'UTF-8',
          Data: htmlData
        },
        Text: {
          Charset: 'UTF-8',
          Data: '',
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'From Contact Form',
      },
    },
    Source: 'no-reply@unicloud.com.vn',
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
