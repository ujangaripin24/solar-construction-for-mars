import {useRouter} from 'next/router'

const Values = () => {
	const router = useRouter();
	const {array} = router.query;
	console.log(array);
	return (
		<div>Nilai :</div>
	)
}

export default Values