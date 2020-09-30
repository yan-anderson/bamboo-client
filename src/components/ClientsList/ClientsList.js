import React from "react";
import './ClientsList.scss';

class ClientsList extends React.Component {
    render() {

        return (
            <div className='list'>
                <div className='row row-head'>
                    <div className='item name'>Имя</div>
                    <div className='item date'>Дата</div>
                    <div className='item mail'>Почта</div>
                    <div className='item phone'>Номер</div>
                </div>

                <div className='row row-item'>
                    <div className='item name'>Ян Андерсон</div>
                    <div className='item date'>03-07-20</div>
                    <div className='item mail'>yan.moskvin17@gmail.com</div>
                    <div className='item phone'>+79033690202</div>
                </div>

                <div className='row row-item'>
                    <div className='item name'>Полина На</div>
                    <div className='item date'>08-07-20</div>
                    <div className='item mail'>polina-na@gmail.com</div>
                    <div className='item phone'>+79037882020</div>
                </div>

                <div className='row row-item'>
                    <div className='item name'>Светозар</div>
                    <div className='item date'>05-07-02</div>
                    <div className='item mail'>kowsh@yandex.ru</div>
                    <div className='item phone'>+79969258890</div>
                </div>
            </div>



            // <div className='clients-list'>
            //     {this.props.error.error &&
            //     <div className='clients-list-error'>{this.props.error.error_msg}</div>
            //     }
            //     {this.props.header &&
            //     <div className='clients-list-item header'>
            //         <div className='clients-list-item-item name'>
            //             Name
            //         </div>
            //         <div className='clients-list-item-item surname'>
            //             Surname
            //         </div>
            //         <div className='clients-list-item-item email'>
            //             Email
            //         </div>
            //         <div className='clients-list-item-item phone'>
            //             Phone
            //         </div>
            //         <div className='clients-list-item-item birthday'>
            //             Birthday
            //         </div>
            //
            //     </div>
            //     }
            //     {this.props.patients.map(patient => (
            //         <div key={patient.id} className='clients-list-item'>
            //             <div className='clients-list-item-item name'>
            //                 {patient.name}
            //             </div>
            //             <div className='clients-list-item-item surname'>
            //                 {patient.surname}
            //             </div>
            //             <div className='clients-list-item-item email'>
            //                 {patient.email}
            //             </div>
            //             <div className='clients-list-item-item phone'>
            //                 {patient.phone}
            //             </div>
            //             <div className='clients-list-item-item birthday'>
            //                 {patient.birthday}
            //             </div>
            //
            //             <div className='clients-list-item-item edit'>
            //                 <a href={'/edit/' + patient.id}></a>
            //             </div>
            //         </div>
            //     ))}
            // </div>
        )
    }
}

export default ClientsList;
