jQuery(document).ready(function($){
    $('.upload_image_button').click(function(e) {
        e.preventDefault();
        var image_frame;
        if (image_frame) {
            image_frame.open();
            return;
        }
        image_frame = wp.media({
            title: 'Choisir une image',
            button: {
                text: 'Choisir'
            },
            multiple: false
        });
        image_frame.on('select', function() {
            var attachment = image_frame.state().get('selection').first().toJSON();
            $('input[name="article_image"]').val(attachment.url);
        });
        image_frame.open();
    });
});
