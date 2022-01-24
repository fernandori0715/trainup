<script>
        var widget;

       <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
        $('body').on('click', '.playable', function (event) {
            if (widget) {
                var text = $(this).html();
                widget.fetch(text, "english");
                $(".ygParent").show();
            }
            else {
                alert("YG is unavailable. Try again later");
            }

        });

        function onYouglishAPIReady() {
            widget = YG.getWidget("yg-widget-0");
            if (widget) {
                widget.addEventListener("onError", errorHdler);
            }
        }

        function errorHdler(event) {
            switch (event.code) {
                case YG.Error.OUTDATED_BROWSER:
                    alert("YG can't be run. Upgrade your browser and try again!");
                    break;
                case YG.Error.TIMEOUT:
                    $(".ygParent").hide();
                    if (widget) widget.close();
                    alert("YG is unavailable. Try again later.");
                    break;
            }
        }
    </script>