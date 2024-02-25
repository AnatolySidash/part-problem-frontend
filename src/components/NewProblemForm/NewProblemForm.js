import React from 'react';
import icon from '../../images/upload.svg';
import { useFormik } from 'formik';
import { problemSchema } from '../../schemas/schema';
import { postNewProblemData } from '../../utils/MainApi';
import ImagePreview from '../ImagePreview/ImagePreview';
import { date } from 'yup';

function NewProblemForm() {


   const onSubmit = async (values, actions) => {

      const formData = new FormData();

      formData.append('occur_date', values.occur_date);
      formData.append('part_number', values.part_number);
      formData.append('part_name', values.part_name);
      formData.append('model', values.model);
      formData.append('part_type', values.part_type);
      formData.append('problem_code', values.problem_code);
      formData.append('problem', values.problem);
      formData.append('defect_qty', values.defect_qty);
      formData.append('reason', values.reason);
      formData.append('supplier', values.supplier);
      formData.append('temp_cm', values.temp_cm);
      formData.append('temp_cm_date', values.temp_cm_date);
      formData.append('perm_cm', values.perm_cm);
      formData.append('perm_cm_date', values.perm_cm_date);
      formData.append('status', values.status);
      formData.append('action', values.action);
      formData.append('responsible', values.responsible);
      formData.append('system', values.system);
      formData.append('comment', values.comment);
      formData.append('part_number_2', values.part_number_2);
      formData.append('occur_date_2', values.occur_date_2);
      formData.append('defect_qty_2', values.defect_qty_2);
      formData.append('action_2', values.action_2);
      formData.append('comment_2', values.comment_2);
      formData.append('part_number_3', values.part_number_3);
      formData.append('occur_date_3', values.occur_date_3);
      formData.append('defect_qty_3', values.defect_qty_3);
      formData.append('action_3', values.action_3);
      formData.append('comment_3', values.comment_3);
      formData.append('part_number_4', values.part_number_4);
      formData.append('occur_date_4', values.occur_date_4);
      formData.append('defect_qty_4', values.defect_qty_4);
      formData.append('action_4', values.action_4);
      formData.append('comment_4', values.comment_4);
      formData.append('part_number_5', values.part_number_5);
      formData.append('occur_date_5', values.occur_date_5);
      formData.append('defect_qty_5', values.defect_qty_5);
      formData.append('action_5', values.action_5);
      formData.append('comment_5', values.comment_5);
      formData.append('part_number_6', values.part_number_6);
      formData.append('occur_date_6', values.occur_date_6);
      formData.append('defect_qty_6', values.defect_qty_6);
      formData.append('action_6', values.action_6);
      formData.append('comment_6', values.comment_6);
      formData.append('image_1', values.image_1);
      formData.append('image_2', values.image_2);
      formData.append('image_3', values.image_3);

      await postNewProblemData(formData)
         .then(res => {
            console.log(res);
         })
         .catch(err => console.log(err));

      // actions.resetForm();
   }

   const formik = useFormik({
      initialValues: {
         occur_date: '',
         part_number: '',
         part_name: '',
         model: '',
         part_type: '',
         problem_code: '',
         problem: '',
         defect_qty: '',
         supplier: '',
         reason: '',
         temp_cm: '',
         temp_cm_date: '',
         perm_cm: '',
         perm_cm_date: '',
         status: '',
         action: '',
         responsible: '',
         system: '',
         comment: '',
         part_number_2: '',
         occur_date_2: new Date('01-02-2020').toISOString().slice(0, 10),
         defect_qty_2: 0,
         action_2: '',
         comment_2: '',
         part_number_3: '',
         occur_date_3: new Date('01-02-2020').toISOString().slice(0, 10),
         defect_qty_3: 0,
         action_3: '',
         comment_3: '',
         part_number_4: '',
         occur_date_4: new Date('01-02-2020').toISOString().slice(0, 10),
         defect_qty_4: 0,
         action_4: '',
         comment_4: '',
         part_number_5: '',
         occur_date_5: new Date('01-02-2020').toISOString().slice(0, 10),
         defect_qty_5: 0,
         action_5: '',
         comment_5: '',
         part_number_6: '',
         occur_date_6: new Date('01-02-2020').toISOString().slice(0, 10),
         defect_qty_6: 0,
         action_6: '',
         comment_6: '',
         image_1: '',
         image_2: '',
         image_3: ''
      },
      validationSchema: problemSchema,
      onSubmit
   })

   return (
      <form className='problemdetails__form' encType='multipart/form-data' autoComplete='off' onSubmit={formik.handleSubmit}>
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
               {formik.values.image_1 ? <ImagePreview file={formik.values.image_1} /> : <div className='problemdetails__photo' id='problem_photo_1'>
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
               {formik.values.image_2 ? <ImagePreview file={formik.values.image_2} /> : <div className='problemdetails__photo' id='problem_photo_2'>
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
               {formik.values.image_3 ? <ImagePreview file={formik.values.image_3} /> : <div className='problemdetails__photo' id='problem_photo_3'>
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
                  type='number'
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

export default NewProblemForm;