import React from 'react';
import icon from '../../images/upload.svg';
import { useFormik } from 'formik';
import { problemSchema } from '../../schemas/schema';
import ProblemImagePreview from '../ProblemImagePreview/ProblemImagePreview';

function ProblemForm({ problem }) {

   const onSubmit = async (values, actions) => {
      console.log(values);
      await new Promise((res) => setTimeout(res, 1000));
      actions.resetForm();
   }

   console.log(problem.occur_date.slice(0, 10));

   const formik = useFormik({
      initialValues: {
         occur_date: problem.occur_date.slice(0, 10),
         part_number: problem.part_number,
         part_name: problem.part_name,
         model: problem.model,
         part_type: problem.part_type,
         problem_code: problem.problem_code,
         problem: problem.problem,
         defect_qty: problem.defect_qty,
         supplier: problem.supplier,
         reason: problem.reason,
         temp_cm: problem.temp_cm !== null ? problem.temp_cm : '',
         temp_cm_date: problem.temp_cm_date !== null ? problem.temp_cm_date.slice(0, 10) : '',
         perm_cm: problem.perm_cm !== null ? problem.perm_cm : '',
         perm_cm_date: problem.perm_cm_date !== null ? problem.perm_cm_date.slice(0, 10) : '',
         status: problem.status,
         action: problem.action,
         responsible: problem.responsible,
         system: problem.system,
         comment: problem.comment !== null ? problem.comment : '',
         part_number_2: problem.part_number_2 !== null ? problem.part_number_2 : '',
         occur_date_2: problem.occur_date_2 !== null ? problem.occur_date_2.slice(0, 10) : '',
         defect_qty_2: problem.defect_qty_2 !== null ? problem.defect_qty_2 : '',
         action_2: problem.action_2 !== null ? problem.action_2 : '',
         comment_2: problem.comment_2 !== null ? problem.comment_2 : '',
         part_number_3: problem.part_number_3 !== null ? problem.part_number_3 : '',
         occur_date_3: problem.occur_date_3 !== null ? problem.occur_date_3.slice(0, 10) : '',
         defect_qty_3: problem.defect_qty_3 !== null ? problem.defect_qty_3 : '',
         action_3: problem.action_3 !== null ? problem.action_3 : '',
         comment_3: problem.comment_3 !== null ? problem.comment_3 : '',
         part_number_4: problem.part_number_4 !== null ? problem.part_number_4 : '',
         occur_date_4: problem.occur_date_4 !== null ? problem.occur_date_4.slice(0, 10) : '',
         defect_qty_4: problem.defect_qty_4 !== null ? problem.defect_qty_4 : '',
         action_4: problem.action_4 !== null ? problem.action_4 : '',
         comment_4: problem.comment_4 !== null ? problem.comment_4 : '',
         part_number_5: problem.part_number_5 !== null ? problem.part_number_5 : '',
         occur_date_5: problem.occur_date_5 !== null ? problem.occur_date_5.slice(0, 10) : '',
         defect_qty_5: problem.defect_qty_5 !== null ? problem.defect_qty_5 : '',
         action_5: problem.action_5 !== null ? problem.action_5 : '',
         comment_5: problem.comment_5 !== null ? problem.comment_5 : '',
         part_number_6: problem.part_number_6 !== null ? problem.part_number_6 : '',
         occur_date_6: problem.occur_date_6 !== null ? problem.occur_date_6.slice(0, 10) : '',
         defect_qty_6: problem.defect_qty_6 !== null ? problem.defect_qty_6 : '',
         action_6: problem.action_6 !== null ? problem.action_6 : '',
         comment_6: problem.comment_6 !== null ? problem.comment_6 : '',
         image_1: problem.image_1,
         image_2: problem.image_2,
         image_3: problem.image_3
      },
      validationSchema: problemSchema,
      onSubmit
   })

   return (
      <form className='problemdetails__form' autoComplete='off' onSubmit={formik.handleSubmit}>
         <button type='submit' disabled={formik.isSubmitting} className='savebutton'>Сохранить</button>
         <fieldset className='problemdetails__block'>
            <label htmlFor='part_number' className='problemdetails__item'>Номер компонента
               <input
                  id='part_number'
                  name='part_number'
                  className={formik.errors.part_number && formik.touched.part_number ? 'problemdetails__input input__error' : 'problemdetails__input'}
                  type='text'
                  value={formik.values.part_number}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder='Номер компонента'
                  minLength={11}
                  maxLength={15}
                  required>
               </input>
               {formik.errors.part_number && formik.touched.part_number && <p className='input__error-message'>{formik.errors.part_number}</p>}
            </label>
            <label htmlFor='part_name' className='problemdetails__item'>Название компонента
               <input
                  id='part_name'
                  name='part_name'
                  className={formik.errors.part_name && formik.touched.part_name ? 'problemdetails__input input__error' : 'problemdetails__input'}
                  type='text'
                  value={formik.values.part_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder='Название компонента'
                  minLength={2}
                  maxLength={100}
                  required>
               </input>
               {formik.errors.part_name && formik.touched.part_name && <p className='input__error-message'>{formik.errors.part_name}</p>}
            </label>
            <label htmlFor='model' className='problemdetails__item problemdetails__item_small'>Модель
               <select
                  id='model'
                  name='model'
                  className={formik.errors.model && formik.touched.model ? 'problemdetails__input input__error' : 'problemdetails__input'}
                  type='text'
                  value={formik.values.model}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required>
                  <option value="">-- Выберите модель --</option>
                  <option value="HCr">HCr</option>
                  <option value="FB">FB</option>
                  <option value="SU2r">SU2r</option>
               </select>
               {formik.errors.model && formik.touched.model && <p className='input__error-message'>{formik.errors.model}</p>}
            </label>
            <label htmlFor='supplier' className='problemdetails__item'>Поставщик
               <input
                  id='supplier'
                  name='supplier'
                  className={formik.errors.supplier && formik.touched.supplier ? 'problemdetails__input input__error' : 'problemdetails__input'}
                  type='text'
                  value={formik.values.supplier}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder='Название поставщика'
                  minLength={2}
                  maxLength={100}>
               </input>
               {formik.errors.supplier && formik.touched.supplier && <p className='input__error-message'>{formik.errors.supplier}</p>}
            </label>
            <label htmlFor='part_type' className='problemdetails__item problemdetails__item_small'>Тип
               <select
                  id='part_type'
                  name='part_type'
                  className={formik.errors.part_type && formik.touched.part_type ? 'problemdetails__input input__error' : 'problemdetails__input'}
                  type='text'
                  value={formik.values.part_type}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required>
                  <option value="">-- Выберите тип --</option>
                  <option value="Локальный">Локальный</option>
                  <option value="Зарубежный">Зарубежный</option>
               </select>
               {formik.errors.part_type && formik.touched.part_type && <p className='input__error-message'>{formik.errors.part_type}</p>}
            </label>
         </fieldset>
         <fieldset className='problemdetails__block'>
            <label htmlFor='problem_code' className='problemdetails__item'>Номер проблемы
               <input
                  id='problem_code'
                  name='problem_code'
                  className={formik.errors.problem_code && formik.touched.problem_code ? 'problemdetails__input input__error' : 'problemdetails__input'}
                  type='text'
                  value={formik.values.problem_code}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder='например EX001'
                  minLength={5}
                  maxLength={6}
                  required>
               </input>
               {formik.errors.problem_code && formik.touched.problem_code && <p className='input__error-message'>{formik.errors.problem_code}</p>}
            </label>
            <label htmlFor='occur_date' className='problemdetails__item problemdetails__item_small'>Дата обнаружения
               <input
                  id='occur_date'
                  name='occur_date'
                  className={formik.errors.occur_date && formik.touched.occur_date ? 'problemdetails__input input__error' : 'problemdetails__input'}
                  type='date'
                  value={formik.values.occur_date}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required>
               </input>
               {formik.errors.occur_date && formik.touched.occur_date && <p className='input__error-message'>{formik.errors.occur_date}</p>}
            </label>
            <label htmlFor='problem' className='problemdetails__item'>Описание проблемы
               <input
                  id='problem'
                  name='problem'
                  className={formik.errors.problem && formik.touched.problem ? 'problemdetails__input input__error' : 'problemdetails__input'}
                  type='text'
                  value={formik.values.problem}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder='Опишите проблему'
                  minLength={2}
                  maxLength={200}
                  required>
               </input>
               {formik.errors.problem && formik.touched.problem && <p className='input__error-message'>{formik.errors.problem}</p>}
            </label>
            <label htmlFor='defect_qty' className='problemdetails__item'>Количество дефектов
               <input
                  id='defect_qty'
                  name='defect_qty'
                  className={formik.errors.defect_qty && formik.touched.defect_qty ? 'problemdetails__input input__error' : 'problemdetails__input'}
                  type='number'
                  value={formik.values.defect_qty}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  minLength={1}
                  maxLength={6}>
               </input>
               {formik.errors.defect_qty && formik.touched.defect_qty && <p className='input__error-message'>{formik.errors.defect_qty}</p>}
            </label>
            <label htmlFor='reason' className='problemdetails__item problemdetails__item_small'>Причина
               <select
                  id='reason'
                  name='reason'
                  className={formik.errors.reason && formik.touched.reason ? 'problemdetails__input input__error' : 'problemdetails__input'}
                  type='text'
                  value={formik.values.reason}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required>
                  <option value="">-- Выберите причину --</option>
                  <option value="Поставщик">Поставщик</option>
                  <option value="Хранение">Хранение</option>
                  <option value="Перемещение">Перемещение</option>
                  <option value="Другое">Другое</option>
               </select>
               {formik.errors.reason && formik.touched.reason && <p className='input__error-message'>{formik.errors.reason}</p>}
            </label>
         </fieldset>
         <fieldset className='problemdetails__block'>
            <label htmlFor='temp_cm' className='problemdetails__item'>Временные меры
               <input
                  id='temp_cm'
                  name='temp_cm'
                  className={formik.errors.temp_cm && formik.touched.temp_cm ? 'problemdetails__input input__error' : 'problemdetails__input'}
                  type='text'
                  value={formik.values.temp_cm}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder='Опишите временные меры'
                  minLength={2}
                  maxLength={200}
               >
               </input>
               {formik.errors.temp_cm && formik.touched.temp_cm && <p className='input__error-message'>{formik.errors.temp_cm}</p>}
            </label>
            <label htmlFor='temp_cm_date' className='problemdetails__item problemdetails__item_small'>Дата временных мер
               <input
                  id='temp_cm_date'
                  name='temp_cm_date'
                  className={formik.errors.temp_cm_date && formik.touched.temp_cm_date ? 'problemdetails__input input__error' : 'problemdetails__input'}
                  type='date'
                  value={formik.values.temp_cm_date}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
               >
               </input>
               {formik.errors.temp_cm_date && formik.touched.temp_cm_date && <p className='input__error-message'>{formik.errors.temp_cm_date}</p>}
            </label>
            <label htmlFor='perm_cm' className='problemdetails__item problemdetails__item_medium'>Постоянные меры
               <input
                  id='perm_cm'
                  name='perm_cm'
                  className={formik.errors.perm_cm && formik.touched.perm_cm ? 'problemdetails__input input__error' : 'problemdetails__input'}
                  type='text'
                  value={formik.values.perm_cm}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder='Опишите постоянные меры'
                  minLength={2}
                  maxLength={200}
               >
               </input>
               {formik.errors.perm_cm && formik.touched.perm_cm && <p className='input__error-message'>{formik.errors.perm_cm}</p>}
            </label>
            <label htmlFor='perm_cm_date' className='problemdetails__item problemdetails__item_small'>Дата постоянных мер
               <input
                  id='perm_cm_date'
                  name='perm_cm_date'
                  className={formik.errors.perm_cm_date && formik.touched.perm_cm_date ? 'problemdetails__input input__error' : 'problemdetails__input'}
                  type='date'
                  value={formik.values.perm_cm_date}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
               >
               </input>
               {formik.errors.perm_cm_date && formik.touched.perm_cm_date && <p className='input__error-message'>{formik.errors.perm_cm_date}</p>}
            </label>
         </fieldset>
         <fieldset className='problemdetails__block'>
            <label htmlFor='responsible' className='problemdetails__item problemdetails__item_small'>Ответственный
               <select
                  id='responsible'
                  name='responsible'
                  className={formik.errors.responsible && formik.touched.responsible ? 'problemdetails__input input__error' : 'problemdetails__input'}
                  type='text'
                  value={formik.values.responsible}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
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
               {formik.errors.responsible && formik.touched.responsible && <p className='input__error-message'>{formik.errors.responsible}</p>}
            </label>
            <label htmlFor='system' className='problemdetails__item problemdetails__item_small'>Система
               <select
                  id='system'
                  name='system'
                  className={formik.errors.system && formik.touched.system ? 'problemdetails__input input__error' : 'problemdetails__input'}
                  type='text'
                  value={formik.values.system}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required>
                  <option value="">-- Выберите систему --</option>
                  <option value="Экстерьер">Экстерьер</option>
                  <option value="Интерьер">Интерьер</option>
                  <option value="Мувинг">Мувинг</option>
                  <option value="Шасси">Шасси</option>
                  <option value="Электрика">Электрика</option>
               </select>
               {formik.errors.system && formik.touched.system && <p className='input__error-message'>{formik.errors.system}</p>}
            </label>
            <label htmlFor='action' className='problemdetails__item problemdetails__item_small'>Решение
               <select
                  id='action'
                  name='action'
                  className={formik.errors.action && formik.touched.action ? 'problemdetails__input input__error' : 'problemdetails__input'}
                  type='text'
                  value={formik.values.action}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required>
                  <option value="">-- Выберите решение --</option>
                  <option value="Возврат поставщику">Возврат поставщику</option>
                  <option value="Возврат на линию">Возврат на линию</option>
                  <option value="Утилизация">Утилизация</option>
                  <option value="Другое">Другое</option>
               </select>
               {formik.errors.action && formik.touched.action && <p className='input__error-message'>{formik.errors.action}</p>}
            </label>
            <label htmlFor='comment' className='problemdetails__item problemdetails__item_medium'>Комментарий
               <input
                  id='comment'
                  name='comment'
                  className='problemdetails__input'
                  type='text'
                  value={formik.values.comment}
                  onChange={formik.handleChange}
                  placeholder='Ваш комментарий'
                  minLength={2}
                  maxLength={255}
               >
               </input>
            </label>
         </fieldset>
         <fieldset className='problemdetails__block'>
            <label htmlFor='status' className='problemdetails__item problemdetails__item_small'>Статус
               <select
                  id='status'
                  name='status'
                  className={formik.errors.status && formik.touched.status ? 'problemdetails__input input__error' : 'problemdetails__input'}
                  type='text'
                  value={formik.values.status}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required>
                  <option value="">-- Выберите статус --</option>
                  <option value="КМ запрошены">КМ запрошены</option>
                  <option value="КМ получены">КМ получены</option>
                  <option value="КМ внедрены">КМ внедрены</option>
                  <option value="Не подтверждена">Не подтверждена</option>
                  <option value="Другое">Другое</option>
               </select>
               {formik.errors.status && formik.touched.status && <p className='input__error-message'>{formik.errors.status}</p>}
            </label>
         </fieldset>
         <h2 className="problemdetails__subtitle">Фотографии дефекта</h2>
         <fieldset className='problemdetails__block'>
            <label htmlFor='image_1' className='problemdetails__item problemdetails__item-photo'>
               <input
                  id='image_1'
                  name='image_1'
                  className='problemdetails__input'
                  type='file'
                  onChange={(e) => formik.setFieldValue('image_1', e.target.files[0])}
                  accept='image/*'
                  hidden
               >
               </input>
               {formik.values.image_1 ? <ProblemImagePreview file={formik.values.image_1} /> : <div className='problemdetails__photo' id='problem_photo_1'>
                  <img src={icon} alt='круг со стрелкой вверх в качестве иконки для загрузки изображений' className='problemdetails__icon' />
                  <p>Кликните чтобы добавить фото</p>
               </div>}
               {/* {formik.errors.image_1 && <p className='input__error-message'>{formik.errors.image_1}</p>} */}
            </label>
            <label htmlFor='image_2' className='problemdetails__item problemdetails__item-photo'>
               <input
                  id='image_2'
                  name='image_2'
                  className='problemdetails__input'
                  type='file'
                  onChange={(e) => formik.setFieldValue('image_2', e.target.files[0])}
                  accept='image/*'
                  hidden
               >
               </input>
               {formik.values.image_2 ? <ProblemImagePreview file={formik.values.image_2} /> : <div className='problemdetails__photo' id='problem_photo_1'>
                  <img src={icon} alt='круг со стрелкой вверх в качестве иконки для загрузки изображений' className='problemdetails__icon' />
                  <p>Кликните чтобы добавить фото</p>
               </div>}
               {/* {formik.errors.image_2 && <p className='input__error-message'>{formik.errors.image_2}</p>} */}
            </label>
            <label htmlFor='image_3' className='problemdetails__item problemdetails__item-photo'>
               <input
                  id='image_3'
                  name='image_3'
                  className='problemdetails__input'
                  type='file'
                  onChange={(e) => formik.setFieldValue('image_3', e.target.files[0])}
                  accept='image/*'
                  hidden
               >
               </input>
               {formik.values.image_3 ? <ProblemImagePreview file={formik.values.image_3} /> : <div className='problemdetails__photo' id='problem_photo_1'>
                  <img src={icon} alt='круг со стрелкой вверх в качестве иконки для загрузки изображений' className='problemdetails__icon' />
                  <p>Кликните чтобы добавить фото</p>
               </div>}
               {/* {formik.errors.image_3 && <p className='input__error-message'>{formik.errors.image_3}</p>} */}
            </label>
         </fieldset>
         <h2 className="problemdetails__subtitle">История повторения проблемы</h2>
         <fieldset className='problemdetails__block'>
            <label htmlFor='part_number_2' className='problemdetails__item'>Номер компонента
               <input
                  id='part_number_2'
                  name='part_number_2'
                  className='problemdetails__input'
                  type='text'
                  value={formik.values.part_number_2}
                  onChange={formik.handleChange}
                  placeholder='Номер компонента'
                  minLength={11}
                  maxLength={15}
               >
               </input>
            </label>
            <label htmlFor='occur_date_2' className='problemdetails__item problemdetails__item_small'>Дата обнаружения
               <input
                  id='occur_date_2'
                  name='occur_date_2'
                  className='problemdetails__input'
                  type='date'
                  value={formik.values.occur_date_2}
                  onChange={formik.handleChange}
               >
               </input>
            </label>
            <label htmlFor='defect_qty_2' className='problemdetails__item'>Количество дефектов
               <input
                  id='defect_qty_2'
                  name='defect_qty_2'
                  className='problemdetails__input'
                  type='number'
                  value={formik.values.defect_qty_2}
                  onChange={formik.handleChange}
                  minLength={1}
                  maxLength={5}>
               </input>
            </label>
            <label htmlFor='action_2' className='problemdetails__item problemdetails__item_small'>Решение
               <select
                  id='action_2'
                  name='action_2'
                  className='problemdetails__input'
                  type='text'
                  value={formik.values.action_2}
                  onChange={formik.handleChange}
               >
                  <option value="">-- Выберите решение --</option>
                  <option value="Возврат поставщику">Возврат поставщику</option>
                  <option value="Возврат на линию">Возврат на линию</option>
                  <option value="Утилизация">Утилизация</option>
                  <option value="Другое">Другое</option>
               </select>
            </label>
            <label htmlFor='comment_2' className='problemdetails__item'>Комментарий
               <input
                  id='comment_2'
                  name='comment_2'
                  className='problemdetails__input'
                  type='text'
                  value={formik.values.comment_2}
                  onChange={formik.handleChange}
                  placeholder='Ваш комментарий'
                  minLength={2}
                  maxLength={255}
               >
               </input>
            </label>
         </fieldset>
         <fieldset className='problemdetails__block'>
            <label htmlFor='part_number_3' className='problemdetails__item'>Номер компонента
               <input
                  id='part_number_3'
                  name='part_number_3'
                  className='problemdetails__input'
                  type='text'
                  value={formik.values.part_number_3}
                  onChange={formik.handleChange}
                  placeholder='Номер компонента'
                  minLength={11}
                  maxLength={15}
               >
               </input>
            </label>
            <label htmlFor='occur_date_3' className='problemdetails__item problemdetails__item_small'>Дата обнаружения
               <input
                  id='occur_date_3'
                  name='occur_date_3'
                  className='problemdetails__input'
                  type='date'
                  value={formik.values.occur_date_3}
                  onChange={formik.handleChange}
               >
               </input>
            </label>
            <label htmlFor='defect_qty_3' className='problemdetails__item'>Количество дефектов
               <input
                  id='defect_qty_3'
                  name='defect_qty_3'
                  className='problemdetails__input'
                  type='number'
                  value={formik.values.defect_qty_3}
                  onChange={formik.handleChange}
                  minLength={1}
                  maxLength={5}>
               </input>
            </label>
            <label htmlFor='action_3' className='problemdetails__item problemdetails__item_small'>Решение
               <select
                  id='action_3'
                  name='action_3'
                  className='problemdetails__input'
                  type='text'
                  value={formik.values.action_3}
                  onChange={formik.handleChange}
               >
                  <option value="">-- Выберите решение --</option>
                  <option value="Возврат поставщику">Возврат поставщику</option>
                  <option value="Возврат на линию">Возврат на линию</option>
                  <option value="Утилизация">Утилизация</option>
                  <option value="Другое">Другое</option>
               </select>
            </label>
            <label htmlFor='comment_3' className='problemdetails__item'>Комментарий
               <input
                  id='comment_3'
                  name='comment_3'
                  className='problemdetails__input'
                  type='text'
                  value={formik.values.comment_3}
                  onChange={formik.handleChange}
                  placeholder='Ваш комментарий'
                  minLength={2}
                  maxLength={255}
               >
               </input>
            </label>
         </fieldset>
         <fieldset className='problemdetails__block'>
            <label htmlFor='part_number_4' className='problemdetails__item'>Номер компонента
               <input
                  id='part_number_4'
                  name='part_number_4'
                  className='problemdetails__input'
                  type='text'
                  value={formik.values.part_number_4}
                  onChange={formik.handleChange}
                  placeholder='Номер компонента'
                  minLength={11}
                  maxLength={15}
               >
               </input>
            </label>
            <label htmlFor='occur_date_4' className='problemdetails__item problemdetails__item_small'>Дата обнаружения
               <input
                  id='occur_date_4'
                  name='occur_date_4'
                  className='problemdetails__input'
                  type='date'
                  value={formik.values.occur_date_4}
                  onChange={formik.handleChange}
               >
               </input>
            </label>
            <label htmlFor='defect_qty_4' className='problemdetails__item'>Количество дефектов
               <input
                  id='defect_qty_4'
                  name='defect_qty_4'
                  className='problemdetails__input'
                  type='number'
                  value={formik.values.defect_qty_4}
                  onChange={formik.handleChange}
                  minLength={1}
                  maxLength={5}>
               </input>
            </label>
            <label htmlFor='action_4' className='problemdetails__item problemdetails__item_small'>Решение
               <select
                  id='action_4'
                  name='action_4'
                  className='problemdetails__input'
                  type='text'
                  value={formik.values.action_4}
                  onChange={formik.handleChange}
               >
                  <option value="">-- Выберите решение --</option>
                  <option value="Возврат поставщику">Возврат поставщику</option>
                  <option value="Возврат на линию">Возврат на линию</option>
                  <option value="Утилизация">Утилизация</option>
                  <option value="Другое">Другое</option>
               </select>
            </label>
            <label htmlFor='comment_4' className='problemdetails__item'>Комментарий
               <input
                  id='comment_4'
                  name='comment_4'
                  className='problemdetails__input'
                  type='text'
                  value={formik.values.comment_4}
                  onChange={formik.handleChange}
                  placeholder='Ваш комментарий'
                  minLength={2}
                  maxLength={255}
               >
               </input>
            </label>
         </fieldset>
         <fieldset className='problemdetails__block'>
            <label htmlFor='part_number_5' className='problemdetails__item'>Номер компонента
               <input
                  id='part_number_5'
                  name='part_number_5'
                  className='problemdetails__input'
                  type='text'
                  value={formik.values.part_number_5}
                  onChange={formik.handleChange}
                  placeholder='Номер компонента'
                  minLength={11}
                  maxLength={15}
               >
               </input>
            </label>
            <label htmlFor='occur_date_5' className='problemdetails__item problemdetails__item_small'>Дата обнаружения
               <input
                  id='occur_date_5'
                  name='occur_date_5'
                  className='problemdetails__input'
                  type='date'
                  value={formik.values.occur_date_5}
                  onChange={formik.handleChange}
               >
               </input>
            </label>
            <label htmlFor='defect_qty_5' className='problemdetails__item'>Количество дефектов
               <input
                  id='defect_qty_5'
                  name='defect_qty_5'
                  className='problemdetails__input'
                  type='number'
                  value={formik.values.defect_qty_5}
                  onChange={formik.handleChange}
                  minLength={1}
                  maxLength={5}>
               </input>
            </label>
            <label htmlFor='action_5' className='problemdetails__item problemdetails__item_small'>Решение
               <select
                  id='action_5'
                  name='action_5'
                  className='problemdetails__input'
                  type='text'
                  value={formik.values.action_5}
                  onChange={formik.handleChange}
               >
                  <option value="">-- Выберите решение --</option>
                  <option value="Возврат поставщику">Возврат поставщику</option>
                  <option value="Возврат на линию">Возврат на линию</option>
                  <option value="Утилизация">Утилизация</option>
                  <option value="Другое">Другое</option>
               </select>
            </label>
            <label htmlFor='comment_5' className='problemdetails__item'>Комментарий
               <input
                  id='comment_5'
                  name='comment_5'
                  className='problemdetails__input'
                  type='text'
                  value={formik.values.comment_5}
                  onChange={formik.handleChange}
                  placeholder='Ваш комментарий'
                  minLength={2}
                  maxLength={255}
               >
               </input>
            </label>
         </fieldset>
         <fieldset className='problemdetails__block'>
            <label htmlFor='part_number_6' className='problemdetails__item'>Номер компонента
               <input
                  id='part_number_6'
                  name='part_number_6'
                  className='problemdetails__input'
                  type='text'
                  value={formik.values.part_number_6}
                  onChange={formik.handleChange}
                  placeholder='Номер компонента'
                  minLength={11}
                  maxLength={15}
               >
               </input>
            </label>
            <label htmlFor='occur_date_6' className='problemdetails__item problemdetails__item_small'>Дата обнаружения
               <input
                  id='occur_date_6'
                  name='occur_date_6'
                  className='problemdetails__input'
                  type='date'
                  value={formik.values.occur_date_6}
                  onChange={formik.handleChange}
               >
               </input>
            </label>
            <label htmlFor='defect_qty_6' className='problemdetails__item'>Количество дефектов
               <input
                  id='defect_qty_6'
                  name='defect_qty_6'
                  className='problemdetails__input'
                  type='number'
                  value={formik.values.defect_qty_6}
                  onChange={formik.handleChange}
                  minLength={1}
                  maxLength={5}>
               </input>
            </label>
            <label htmlFor='action_6' className='problemdetails__item problemdetails__item_small'>Решение
               <select
                  id='action_6'
                  name='action_6'
                  className='problemdetails__input'
                  type='text'
                  value={formik.values.action_6}
                  onChange={formik.handleChange}
               >
                  <option value="">-- Выберите решение --</option>
                  <option value="Возврат поставщику">Возврат поставщику</option>
                  <option value="Возврат на линию">Возврат на линию</option>
                  <option value="Утилизация">Утилизация</option>
                  <option value="Другое">Другое</option>
               </select>
            </label>
            <label htmlFor='comment_6' className='problemdetails__item'>Комментарий
               <input
                  id='comment_6'
                  name='comment_6'
                  className='problemdetails__input'
                  type='text'
                  value={formik.values.comment_6}
                  onChange={formik.handleChange}
                  placeholder='Ваш комментарий'
                  minLength={2}
                  maxLength={255}
               >
               </input>
            </label>
         </fieldset>
      </form>
   )
}

export default ProblemForm;