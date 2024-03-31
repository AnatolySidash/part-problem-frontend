import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProblemDetail } from '../../utils/MainApi';
import ProblemForm from '../ProblemForm/ProblemForm';

function ProblemDetails() {

    const [problem, setProblem] = React.useState(null);

    const params = useParams();

    React.useEffect(() => {

        const getProblem = async () => {
            const data = await getProblemDetail(params.id);
            return data;
        }
        getProblem().then(data => {
            setProblem(data[0]);
        });
    }, [params.id])

    return (
        <section className="problemdetails">
            <Link to=".." relative="path" className='problemdetails__link'>&larr; Назад к списку</Link>
            <h1 className="problemdetails__title">Карточка проблемы</h1>
            {problem ? <ProblemForm problem={problem} /> : <p>Loading...</p>}
        </section >
    )
}

export default ProblemDetails;