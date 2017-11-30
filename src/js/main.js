var whyItem = document.getElementsByClassName('why-box');
    var whyHeading = document.getElementsByClassName('why-box-heading');
    for (i = 0; i < whyHeading.length; i++) {
        whyHeading[i].addEventListener('click', toggleItem, false);
    }
    function toggleItem() {
        var itemClass = this.parentNode.className;
        for (i = 0; i < whyItem.length; i++) {
            whyItem[i].className = 'why-box close';
        }
        if (itemClass == 'why-box close') {
            this.parentNode.className = 'why-box open';
        }
    }
