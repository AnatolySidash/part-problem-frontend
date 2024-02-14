import React from 'react';
import { useParams } from 'react-router-dom';
import { getProblemDetail } from '../../utils/MainApi';
import icon from '../../images/upload.svg';

function ProblemDetails() {

    const [problem, setProblem] = React.useState(null);
    const [image01, setImage01] = React.useState('');
    const [image02, setImage02] = React.useState('');
    const [image03, setImage03] = React.useState('');

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

    function uploadImage01(event) {
        setImage01(event.target.files[0]);
    }

    function uploadImage02(event) {
        setImage02(event.target.files[0]);
    }

    function uploadImage03(event) {
        setImage03(event.target.files[0]);
    }

    return (
        <section className="problemdetails">
            <h1 className="problemdetails__title">Карточка проблемы</h1>
            <form className='problemdetails__form'>
                <fieldset className='problemdetails__block'>
                    <label htmlFor='partNo' className='problemdetails__item'>Номер компонента
                        <input
                            id='partNo'
                            name='partNo'
                            className='problemdetails__input'
                            type='text'
                            placeholder='Номер компонента'
                            minLength={10}
                            maxLength={10}
                            required>
                        </input>
                    </label>
                    <label htmlFor='partName' className='problemdetails__item'>Название компонента
                        <input
                            id='partName'
                            name='partName'
                            className='problemdetails__input'
                            type='text'
                            placeholder='Название компонента'
                            minLength={5}
                            maxLength={50}
                            required>
                        </input>
                    </label>
                    <label htmlFor='model' className='problemdetails__item'>Модель
                        <select
                            id='model'
                            name='model'
                            className='problemdetails__input problemdetails__item_small'
                            type='text'
                            required>
                            <option value="">-- Выберите модель --</option>
                            <option value="HCr">HCr</option>
                            <option value="FB">FB</option>
                            <option value="SU2r">SU2r</option>
                        </select>
                    </label>
                    <label htmlFor='supplier' className='problemdetails__item'>Поставщик
                        <input
                            id='supplier'
                            name='supplier'
                            className='problemdetails__input'
                            type='text'
                            placeholder='Название поставщика'
                            minLength={2}
                            maxLength={100}>
                        </input>
                    </label>
                    <label htmlFor='partType' className='problemdetails__item'>Тип
                        <select
                            id='partType'
                            name='partType'
                            className='problemdetails__input problemdetails__item_small'
                            type='text'
                            required>
                            <option value="">-- Выберите тип --</option>
                            <option value="Локальный">Локальный</option>
                            <option value="Зарубежный">Зарубежный</option>
                        </select>
                    </label>
                </fieldset>
                <fieldset className='problemdetails__block'>
                    <label htmlFor='problemCode' className='problemdetails__item'>Номер проблемы
                        <input
                            id='problemCode'
                            name='problemCode'
                            className='problemdetails__input'
                            type='text'
                            placeholder='например EX001'
                            minLength={5}
                            maxLength={10}
                            required>
                        </input>
                    </label>
                    <label htmlFor='occurDate' className='problemdetails__item problemdetails__item_small'>Дата обнаружения
                        <input
                            id='occurDate'
                            name='occurDate'
                            className='problemdetails__input'
                            type='date'
                            required>
                        </input>
                    </label>
                    <label htmlFor='problemDesc' className='problemdetails__item'>Описание проблемы
                        <input
                            id='problemDesc'
                            name='problemDesc'
                            className='problemdetails__input'
                            type='text'
                            placeholder='Опишите проблему'
                            minLength={2}
                            maxLength={255}
                            required>
                        </input>
                    </label>
                    <label htmlFor='problemQty' className='problemdetails__item'>Количество дефектов
                        <input
                            id='problemQty'
                            name='problemQty'
                            className='problemdetails__input'
                            type='number'
                            minLength={1}
                            maxLength={5}>
                        </input>
                    </label>
                    <label htmlFor='reason' className='problemdetails__item'>Причина
                        <select
                            id='reason'
                            name='reason'
                            className='problemdetails__input problemdetails__item_small'
                            type='text'
                            required>
                            <option value="">-- Выберите причину --</option>
                            <option value="Поставщик">Поставщик</option>
                            <option value="Хранение">Хранение</option>
                            <option value="Перемещение">Перемещение</option>
                            <option value="Другое">Другое</option>
                        </select>
                    </label>
                </fieldset>
                <fieldset className='problemdetails__block'>
                    <label htmlFor='tempAction' className='problemdetails__item'>Временные меры
                        <input
                            id='tempAction'
                            name='tempAction'
                            className='problemdetails__input'
                            type='text'
                            placeholder='Опишите временные меры'
                            minLength={5}
                            maxLength={255}
                        >
                        </input>
                    </label>
                    <label htmlFor='tempActionDate' className='problemdetails__item problemdetails__item_small'>Дата временных мер
                        <input
                            id='tempActionDate'
                            name='tempActionDate'
                            className='problemdetails__input'
                            type='date'
                        >
                        </input>
                    </label>
                    <label htmlFor='permAction' className='problemdetails__item problemdetails__item_medium'>Постоянные меры
                        <input
                            id='permAction'
                            name='permAction'
                            className='problemdetails__input'
                            type='text'
                            placeholder='Опишите постоянные меры'
                            minLength={5}
                            maxLength={255}
                        >
                        </input>
                    </label>
                    <label htmlFor='permActionDate' className='problemdetails__item problemdetails__item_small'>Дата постоянных мер
                        <input
                            id='permActionDate'
                            name='permActionDate'
                            className='problemdetails__input'
                            type='date'
                        >
                        </input>
                    </label>
                </fieldset>
                <fieldset className='problemdetails__block'>
                    <label htmlFor='responsible' className='problemdetails__item'>Ответственный
                        <select
                            id='responsible'
                            name='responsible'
                            className='problemdetails__input problemdetails__item_small'
                            type='text'
                            required>
                            <option value="">-- Выберите ФИО --</option>
                            <option value="Басков Сергей">Басков Сергей</option>
                            <option value="Барановский Дмитрий">Барановский Дмитрий</option>
                            <option value="Кузнецов Алексей">Кузнецов Алексей</option>
                            <option value="Лебедев Евгений">Лебедев Евгений</option>
                            <option value="Лисицын Дмитрий">Лисицын Дмитрий</option>
                            <option value="Тимченко Олег">Тимченко Олег</option>
                            <option value="Топоров Андрей">Топоров Андрей</option>
                        </select>
                    </label>
                    <label htmlFor='system' className='problemdetails__item'>Система
                        <select
                            id='system'
                            name='system'
                            className='problemdetails__input problemdetails__item_small'
                            type='text'
                            required>
                            <option value="">-- Выберите систему --</option>
                            <option value="Экстерьер">Экстерьер</option>
                            <option value="Интерьер">Интерьер</option>
                            <option value="Мувинг">Мувинг</option>
                            <option value="Шасси">Шасси</option>
                            <option value="Электрика">Электрика</option>
                        </select>
                    </label>
                    <label htmlFor='action' className='problemdetails__item'>Решение
                        <select
                            id='action'
                            name='action'
                            className='problemdetails__input problemdetails__item_small'
                            type='text'
                            required>
                            <option value="">-- Выберите решение --</option>
                            <option value="Возврат поставщику">Возврат поставщику</option>
                            <option value="Возврат на линию">Возврат на линию</option>
                            <option value="Утилизация">Утилизация</option>
                            <option value="Другое">Другое</option>
                        </select>
                    </label>
                    <label htmlFor='comment' className='problemdetails__item problemdetails__item_medium'>Комментарий
                        <input
                            id='comment'
                            name='comment'
                            className='problemdetails__input'
                            type='text'
                            placeholder='Ваш комментарий'
                            minLength={5}
                            maxLength={255}
                        >
                        </input>
                    </label>
                </fieldset>
                <h2 className="problemdetails__subtitle">Фотографии дефекта</h2>
                <fieldset className='problemdetails__block'>
                    <label htmlFor='photo_1' className='problemdetails__item problemdetails__item-photo'>
                        <input
                            id='photo_1'
                            name='photo_1'
                            className='problemdetails__input'
                            type='file'
                            onChange={uploadImage01}
                            accept='image/*'
                            hidden
                        >
                        </input>
                        {image01 ? <img src={URL.createObjectURL(image01)} alt='фото дефекта' className='problemdetails__photo' /> : <div className='problemdetails__photo' id='problem_photo_1'>
                            <img src={icon} alt='круг со стрелкой вверх в качестве иконки для загрузки изображений' className='problemdetails__icon' />
                            <p>Кликните чтобы добавить фото</p>
                        </div>}
                    </label>
                    <label htmlFor='photo_2' className='problemdetails__item problemdetails__item-photo'>
                        <input
                            id='photo_2'
                            name='photo_3'
                            className='problemdetails__input'
                            type='file'
                            onChange={uploadImage02}
                            accept='image/*'
                            hidden
                        >
                        </input>
                        {image02 ? <img src={URL.createObjectURL(image02)} alt='фото дефекта' className='problemdetails__photo' /> : <div className='problemdetails__photo' id='problem_photo_1'>
                            <img src={icon} alt='круг со стрелкой вверх в качестве иконки для загрузки изображений' className='problemdetails__icon' />
                            <p>Кликните чтобы добавить фото</p>
                        </div>}
                    </label>
                    <label htmlFor='photo_3' className='problemdetails__item problemdetails__item-photo'>
                        <input
                            id='photo_3'
                            name='photo_3'
                            className='problemdetails__input'
                            type='file'
                            onChange={uploadImage03}
                            accept='image/*'
                            hidden
                        >
                        </input>
                        {image03 ? <img src={URL.createObjectURL(image03)} alt='фото дефекта' className='problemdetails__photo' /> : <div className='problemdetails__photo' id='problem_photo_1'>
                            <img src={icon} alt='круг со стрелкой вверх в качестве иконки для загрузки изображений' className='problemdetails__icon' />
                            <p>Кликните чтобы добавить фото</p>
                        </div>}
                    </label>
                </fieldset>
                <h2 className="problemdetails__subtitle">История повторения проблемы</h2>
                <fieldset className='problemdetails__block'>
                    <label htmlFor='extraPartNo_1' className='problemdetails__item'>Номер компонента
                        <input
                            id='extraPartNo_1'
                            name='extraPartNo_1'
                            className='problemdetails__input'
                            type='text'
                            placeholder='Номер компонента'
                            minLength={10}
                            maxLength={10}
                        >
                        </input>
                    </label>
                    <label htmlFor='extraOccurDate_1' className='problemdetails__item problemdetails__item_small'>Дата обнаружения
                        <input
                            id='extraOccurDate_1'
                            name='extraOccurDate_1'
                            className='problemdetails__input'
                            type='date'
                        >
                        </input>
                    </label>
                    <label htmlFor='extraProblemQty_1' className='problemdetails__item'>Количество дефектов
                        <input
                            id='extraProblemQty_1'
                            name='extraProblemQty_1'
                            className='problemdetails__input'
                            type='number'
                            minLength={1}
                            maxLength={5}>
                        </input>
                    </label>
                    <label htmlFor='extraDecision_1' className='problemdetails__item'>Решение
                        <select
                            id='extraDecision_1'
                            name='extraDecision_1'
                            className='problemdetails__input problemdetails__item_small'
                            type='text'
                            required>
                            <option value="">-- Выберите решение --</option>
                            <option value="Возврат поставщику">Возврат поставщику</option>
                            <option value="Возврат на линию">Возврат на линию</option>
                            <option value="Утилизация">Утилизация</option>
                            <option value="Другое">Другое</option>
                        </select>
                    </label>
                    <label htmlFor='extraComment_1' className='problemdetails__item'>Комментарий
                        <input
                            id='extraComment_1'
                            name='extraComment_1'
                            className='problemdetails__input'
                            type='text'
                            placeholder='Ваш комментарий'
                            minLength={5}
                            maxLength={255}
                        >
                        </input>
                    </label>
                </fieldset>
                <fieldset className='problemdetails__block'>
                    <label htmlFor='extraPartNo_2' className='problemdetails__item'>Номер компонента
                        <input
                            id='extraPartNo_2'
                            name='extraPartNo_2'
                            className='problemdetails__input'
                            type='text'
                            placeholder='Номер компонента'
                            minLength={10}
                            maxLength={10}
                        >
                        </input>
                    </label>
                    <label htmlFor='extraOccurDate_2' className='problemdetails__item problemdetails__item_small'>Дата обнаружения
                        <input
                            id='extraOccurDate_2'
                            name='extraOccurDate_2'
                            className='problemdetails__input'
                            type='date'
                        >
                        </input>
                    </label>
                    <label htmlFor='extraProblemQty_2' className='problemdetails__item'>Количество дефектов
                        <input
                            id='extraProblemQty_2'
                            name='extraProblemQty_2'
                            className='problemdetails__input'
                            type='number'
                            minLength={1}
                            maxLength={5}>
                        </input>
                    </label>
                    <label htmlFor='extraDecision_2' className='problemdetails__item'>Решение
                        <select
                            id='extraDecision_2'
                            name='extraDecision_2'
                            className='problemdetails__input problemdetails__item_small'
                            type='text'
                            required>
                            <option value="">-- Выберите решение --</option>
                            <option value="Возврат поставщику">Возврат поставщику</option>
                            <option value="Возврат на линию">Возврат на линию</option>
                            <option value="Утилизация">Утилизация</option>
                            <option value="Другое">Другое</option>
                        </select>
                    </label>
                    <label htmlFor='extraComment_2' className='problemdetails__item'>Комментарий
                        <input
                            id='extraComment_2'
                            name='extraComment_2'
                            className='problemdetails__input'
                            type='text'
                            placeholder='Ваш комментарий'
                            minLength={5}
                            maxLength={255}
                        >
                        </input>
                    </label>
                </fieldset>
                <fieldset className='problemdetails__block'>
                    <label htmlFor='extraPartNo_3' className='problemdetails__item'>Номер компонента
                        <input
                            id='extraPartNo_3'
                            name='extraPartNo_3'
                            className='problemdetails__input'
                            type='text'
                            placeholder='Номер компонента'
                            minLength={10}
                            maxLength={10}
                        >
                        </input>
                    </label>
                    <label htmlFor='extraOccurDate_3' className='problemdetails__item problemdetails__item_small'>Дата обнаружения
                        <input
                            id='extraOccurDate_3'
                            name='extraOccurDate_3'
                            className='problemdetails__input'
                            type='date'
                        >
                        </input>
                    </label>
                    <label htmlFor='extraProblemQty_3' className='problemdetails__item'>Количество дефектов
                        <input
                            id='extraProblemQty_3'
                            name='extraProblemQty_3'
                            className='problemdetails__input'
                            type='number'
                            minLength={1}
                            maxLength={5}>
                        </input>
                    </label>
                    <label htmlFor='extraDecision_3' className='problemdetails__item'>Решение
                        <select
                            id='extraDecision_3'
                            name='extraDecision_3'
                            className='problemdetails__input problemdetails__item_small'
                            type='text'
                            required>
                            <option value="">-- Выберите решение --</option>
                            <option value="Возврат поставщику">Возврат поставщику</option>
                            <option value="Возврат на линию">Возврат на линию</option>
                            <option value="Утилизация">Утилизация</option>
                            <option value="Другое">Другое</option>
                        </select>
                    </label>
                    <label htmlFor='extraComment_3' className='problemdetails__item'>Комментарий
                        <input
                            id='extraComment_3'
                            name='extraComment_3'
                            className='problemdetails__input'
                            type='text'
                            placeholder='Ваш комментарий'
                            minLength={5}
                            maxLength={255}
                        >
                        </input>
                    </label>
                </fieldset>
            </form>
        </section >
    )
}

export default ProblemDetails;