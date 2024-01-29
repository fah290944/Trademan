export default function () {

const changeArrowAtBar = (prev: string = "",market: any = '') => {
    const data = market
    let iconArrow = ''
    if (data?.length > 0) {
        for (let i = 0; i < data.length; i++) {
            let j = i + 1
            if (data[j] != undefined) {
                if (Number(data[i]?.Price) < Number(data[j]?.Price)) {
                    //up
                    iconArrow = '<svg class="fill-[#01C233]" width="17" height="25" viewBox="0 0 8.945 19.5" xmlns="http://www.w3.org/2000/svg"><path d="m8.727 14.5a.754.754 0 0 0 -1.06 0l-2.45 2.45v-16.2a.75.75 0 0 0 -1.5 0v16.19l-2.44-2.44a.75.75 0 0 0 -1.06 1.06l3.71 3.71a.782.782 0 0 0 .26.17.037.037 0 0 1 .03.01.733.733 0 0 0 .79-.17l3.72-3.72a.754.754 0 0 0 0-1.06z" fill="#00d136" transform="matrix(-1 0 0 -1 8.945 19.5)"/></svg>';
                } else if (Number(data[i]?.Price) > Number(data[j]?.Price)) {
                    //down
                    iconArrow = '<svg class"fill-[#e44840]" width="17" height="25" viewBox="0 0 8.945 19.5" xmlns="http://www.w3.org/2000/svg"><path d="m8.727 14.5a.754.754 0 0 0 -1.06 0l-2.45 2.45v-16.2a.75.75 0 0 0 -1.5 0v16.19l-2.44-2.44a.75.75 0 0 0 -1.06 1.06l3.71 3.71a.782.782 0 0 0 .26.17.037.037 0 0 1 .03.01.733.733 0 0 0 .79-.17l3.72-3.72a.754.754 0 0 0 0-1.06z" fill="#e44840"/></svg>';
                } else {
                    iconArrow = ''
                }
            }
            else {
                if (Number(data[0]?.Price) == Number(prev)) {
                    iconArrow = ''
                }
                else if (Number(data[0]?.Price) > Number(prev)) {
                    //up
                    //  return 'up'
                    iconArrow = '<svg class="fill-[#01C233]" width="17" height="25" viewBox="0 0 8.945 19.5" xmlns="http://www.w3.org/2000/svg"><path d="m8.727 14.5a.754.754 0 0 0 -1.06 0l-2.45 2.45v-16.2a.75.75 0 0 0 -1.5 0v16.19l-2.44-2.44a.75.75 0 0 0 -1.06 1.06l3.71 3.71a.782.782 0 0 0 .26.17.037.037 0 0 1 .03.01.733.733 0 0 0 .79-.17l3.72-3.72a.754.754 0 0 0 0-1.06z" fill="#00d136" transform="matrix(-1 0 0 -1 8.945 19.5)"/></svg>';
                }
                //down
                else {
                    // return 'down'
                    iconArrow = '<svg class"fill-[#e44840]" width="17" height="25" viewBox="0 0 8.945 19.5" xmlns="http://www.w3.org/2000/svg"><path d="m8.727 14.5a.754.754 0 0 0 -1.06 0l-2.45 2.45v-16.2a.75.75 0 0 0 -1.5 0v16.19l-2.44-2.44a.75.75 0 0 0 -1.06 1.06l3.71 3.71a.782.782 0 0 0 .26.17.037.037 0 0 1 .03.01.733.733 0 0 0 .79-.17l3.72-3.72a.754.754 0 0 0 0-1.06z" fill="#e44840"/></svg>';
                }
            }
        }
    }
    return iconArrow

}

    return{
        changeArrowAtBar,
    }

};