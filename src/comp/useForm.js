import { useState } from 'react'

const useForm = (book) => {
    var [val, setVal] = useState(book);
    return [val, (event) => {
        setVal(
            {
                ...val, [event.target.name]: event.target.value
            }
        )

    }]
}
export default useForm