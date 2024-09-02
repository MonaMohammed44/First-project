import React from 'react'
import './ServesPlan.css'
import servs1 from '../../Assets/ea43cbf4-d205-4a6c-9788-b1fa6497b7f1.jpeg'
import servs2 from '../../Assets/675da057-d7c1-4ef8-937c-c617c8b689ae.jpeg'
import servs3 from '../../Assets/3D Design for Advertising.jpeg'
import servs4 from '../../Assets/بوسترات.jpeg'
import servs5 from '../../Assets/fdf5ae86-e618-4135-b4c3-2aad51a0e65f.jpeg'
import servs6 from '../../Assets/Young couples to travel with luggage back.jpeg'
import servs7 from '../../Assets/2b261552-5855-4b50-b817-feedd6ecc871.jpeg'
import servs8 from '../../Assets/Travel.jpeg'
import servs9 from '../../Assets/الحنين للوطن.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Footer from '../Footer/Footer'

function ServesPlan() {
  return (
    <div className='plan'>
        <div className='cont1'>
            <div className='serves1'>
                <img className='servs1' src={servs1} alt='serves1'/>
                <h4>1. حجز التذاكر</h4>
                <p>استمتع بتجربة حجز سلسة وسريعة عبر الإنترنت. 
                    .اختر رحلتك المناسبة واحجز تذكرتك في بضع خطوات بسيطة. 
                      نوفر خيارات مرنة للدفع لتناسب احتياجاتك.</p>

                      <FontAwesomeIcon className='iconHeart ' icon={faHeart} />
            </div>

            <div className='serves2'>
                <img className='servs2' src={servs2} alt='serves2'/>
                <h4>2. إدارة الحجز</h4>
                <p>
                قم بإدارة حجزك بكل سهولة:

                  تعديل أو إلغاء الحجز.
                    اختيار أو تعديل المقعد.
                    إضافة أمتعة إضافية.
                    تحديث تفاصيل الركاب. 
                 </p>
                 <FontAwesomeIcon className='iconHeart ' icon={faHeart} />
            </div>

            <div className='serves3'>
                <img className='servs3' src={servs3} alt='serves3'/>
                <h4>3. تسجيل الوصول عبر الإنترنت</h4>
                <p>
                تجنب الانتظار في الطوابير بالمطار وسجل الوصول لرحلتك عبر الإنترنت من منزلك.
                 اختر مقعدك واطبع بطاقة الصعود أو استلمها على هاتفك.
                </p>
                <FontAwesomeIcon className='iconHeart ' icon={faHeart} />
            </div>
        </div>



        <div className='cont2'>
            <div className='serves4'>
                <img className='servs4' src={servs4} alt='serves4'/>
                <h4>4. برامج الولاء</h4>
                <p>
                نضم إلى برنامج المسافر الدائم واحصل على نقاط مع كل رحلة تقوم بها.
                استبدل النقاط بمزايا مثل ترقيات مقاعد أو تخفيضات على الرحلات المستقبلية.
                </p>
                <FontAwesomeIcon className='iconHeart ' icon={faHeart} />
            </div>

            <div className='serves5'>
                <img className='servs5' src={servs5} alt='serves5'/>
                <h4>5. خدمات المطار</h4>
                <p>
                <FontAwesomeIcon className='iconHeart ' icon={faHeart} />
                ستفد من خدماتنا المتميزة في المطار:

                صالات انتظار خاصة لركاب الدرجة الأولى ودرجة الأعمال.
                خدمات الاستقبال والمساعدة.
                خدمة نقل الأمتعة.
                 </p>
            </div>

            <div className='serves6'>
                <img className='servs6' src={servs6} alt='serves6'/>
                <h4>6. خدمات خاصة</h4>
                <p>
                نحن نهتم بجميع احتياجات المسافرين الخاصة:

                خدمات للركاب ذوي الاحتياجات الخاصة.
                خدمات للأطفال المسافرين بمفردهم.
                وجبات خاصة تلبي جميع المتطلبات الغذائية.
                </p>
                <FontAwesomeIcon className='iconHeart ' icon={faHeart} />
            </div>
        </div>



        <div className='cont3'>
            <div className='serves7'>
                <img className='servs7' src={servs7} alt='serves7'/>
                <h4>7. الترفيه على متن الطائرة</h4>
                <p>
                متع بتجربة ترفيهية غنية مع أحدث الأفلام، الموسيقى، والألعاب.
                 لدينا نظام ترفيهي على متن الطائرة يوفر محتوى متنوع يلبي جميع الأذواق.
                </p>
                <FontAwesomeIcon className='iconHeart ' icon={faHeart} />
            </div>

            <div className='serves8'>
                <img className='servs8' src={servs8} alt='serves8'/>
                <h4>8. عروض خاصة</h4>
                <p>
                ستفد من عروضنا الخاصة والحصرية على الرحلات الجوية وحزم السفر.
                 تحقق من صفحة العروض بانتظام للحصول على أفضل الأسعار.
                 </p>
                 <FontAwesomeIcon className='iconHeart ' icon={faHeart} />
            </div>

            <div className='serves9'>
                <img className='servs9' src={servs9} alt='serves9'/>
                <h4>9. تأمين السفر</h4>
                <p>
                احجز تأمين السفر الذي يغطي حالات الطوارئ الصحية، إلغاء الرحلات، وفقدان الأمتعة،
                 لتسافر براحة بال تامة.
                </p>
                <FontAwesomeIcon className='iconHeart ' icon={faHeart} />
            </div>

        </div>
        {/* <Footer/> */}
         </div>
        
  )
}

export default ServesPlan
