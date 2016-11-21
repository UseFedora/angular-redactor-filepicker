$.Redactor.prototype.filepicker = function()
{
    return {
        init: function ()
        {
            var button = this.button.add('filepicker', 'Add Image');
            //button.setIcon('<i class="fa fa-image"></i>');
            this.button.addCallback(button, this.filepicker.showUploadModal);
            this.button.setIcon(button, '<i class="fa fa-image"></i>');

        },
        showUploadModal: function(buttonName)
        {
            filepicker.pick(this.filepicker.insertImage, {
              mimetype: 'image/*',
              container: 'modal',
              services: ["CUSTOMSOURCE, COMPUTER, IMAGE_SEARCH, URL, FTP, DROPBOX, GOOGLE_DRIVE, SKYDRIVE, CONVERT, IMGUR"],
              convert_options:  ["crop", "rotate", "filter"],

            },
            {
              location:"S3"
            });
            var blob = {url: "https://www.filepicker.io/api/file/wMk1A1aIRbu56CnE9IVj"}
        },
        insertImage: function(object) {
          html = "<img src='" + object.url + "' class='img-responsive'>";
          this.insert.raw(html);
        }
    };
};
