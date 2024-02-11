import React from 'react';
import { useParams } from 'react-router-dom';
import { getProblemDetail } from '../../utils/MainApi';


function ProblemDetails() {

    const [problem, setProblem] = React.useState(null);

    const params = useParams();

    React.useEffect(() => {

        const getProblem = async () => {
            const data = await getProblemDetail(params.id);
            return data;
        }
        getProblem().then(data => {
            setProblem(data[0])
        });
    }, [params.id])

    return (
        <article className="problemdetails">
            <div className='problemdetails__info'>
                {/* <ul className='problemdetails__list'>
                    <li className='problemdetails__item'>
                        <h3 className='problemdetails__subtitle'>Номер проблемы:</h3>
                        <p className='problemcard__data'>{problem?.problem_code}</p>
                    </li>
                    <li className='problemdetails__item'>
                        <h3 className='problemdetails__subtitle'>Описание проблемы:</h3>
                        <p className='problemcard__data'>{problem?.problem}</p>
                    </li>
                </ul> */}
                <table>
                    <thead>
                        <tr>
                            <th scope='col'>Номер</th>
                            <th scope='col'>Описание</th>
                            <th scope='col'>Количество</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{problem?.problem_code}</td>
                            <td>{problem?.problem}</td>
                            <td>{problem?.defect_qty}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </article >
    )
}

export default ProblemDetails;