export default function Message({count}){
    let message = "click!"

    if (count < 5) {
        message = "click more"
    }
    else if (count >= 10){
        message = "a little more"
    }
    else if (count = 20){
        message = 'avoie'
    }

    return <p>{message}</p>
}