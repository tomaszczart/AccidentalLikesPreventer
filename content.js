const elements = ["UFILikeLink", "likeButton", "FriendRequestAdd", "_5ymq", "ego_like", "PageLikeButton", "_2tga", "comment_link", "share_action_link"];

function element_click(data) {
    let dataTarget = data.target;
    containsClass(dataTarget);
}

/* Check if classname of given element is on the list */
function containsClass(dataTarget) {
    /* for every child (class) of clicked element*/
    for (let child in dataTarget.childNodes) {
        /* compare with every element on the list */
        for (let element in elements) {
            if (dataTarget.childNodes[child].classList.contains(elements[element])) {
                console.log(element);
                unlockForAMoment(dataTarget.childNodes[child])//if list contains given class, return true
            }
        }
    }
}

/* this fucntion adds "enable" class witch overwrites cursor events and allows to click on element for limited time*/
function unlockForAMoment(element) {
    setTimeout(function () {
        addClass(element, "enabled");
    }, 500);
    setTimeout(function () {
        removeClass(element, "enabled");
    }, 5000);
}

/* some leaking functions (because i don't want to use jquery, it's too heavy for small extensions) */
function hasClass(el, className) {
    if (el.classList)
        return el.classList.contains(className)
    else
        return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}

function addClass(el, className) {
    if (el.classList)
        el.classList.add(className)
    else if (!hasClass(el, className)) el.className += " " + className
}

function removeClass(el, className) {
    if (el.classList)
        el.classList.remove(className)
    else if (hasClass(el, className)) {
        let reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
        el.className = el.className.replace(reg, ' ')
    }
}

document.addEventListener('dblclick', element_click, false);