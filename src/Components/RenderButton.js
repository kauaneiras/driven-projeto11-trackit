import { ThreeDots } from 'react-loader-spinner'

export default function Button(props) {
    const { state, text } = props;
    if(state){
        return (<ThreeDots color="white" height={80}width={80} />)
    }
    if(!state){
        return (<p>{text}</p>)
    }
}
