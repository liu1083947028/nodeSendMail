/**
 * Created by Frank on 2018/1/17.
 */
var nodemailer = require('nodemailer');

var config = {
    host: 'smtp.163.com',
    sendFrom: '17194378295@163.com',
    pass: '***'
};

//需要忽略 ignoreTLS 的邮件服务器
//config = {
//    host: 'polylinkex.polylink.net',
//    sendFrom: 'frank.liu@polylink.net',
//    pass: '***'
//};

var option = {
    host: config.host,
    port: 25,
    auth: {
        user: config.sendFrom,
        pass: config.pass
    },

    //ignoreTLS: true
};
var transporter = nodemailer.createTransport(option);

//邮件内容
var data = {
    from: config.sendFrom,
    to: '1083947028@qq.com',
    subject: 'Message title',
    //text: config.sendFrom + ' Plaintext version of the message',
    html: config.sendFrom + '<p>HTML version of the message</p>'
};

//发送邮件
transporter.sendMail(data, (err, info) => {
    console.log('==========send email result===', err, info);
});