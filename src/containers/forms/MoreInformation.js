import React, { Component } from 'react';
import axios from 'axios';

export default class MoreInformation extends Component {

   state = {
      file: null,
      fileReady: false
   }

   handleFileSelected = event => {
      this.setState({ file: event.target.files[0] })
   }

   handleFileUpload = () => {
      const { file } = this.state;
      const cloudName = process.env.REACT_APP_cloudName

      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', process.env.REACT_APP_uploadPreset);

      axios({
         url: `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
         method: 'POST',
         data: formData
      }).then(resp => {
         const imageId = resp.data.public_id;
         this.setState({ fileReady: true })
         this.props.uploadImageId(imageId);
      })
   }

   render() {
      
      const { attraction } = this.props
      return(
         <div className='form'>
            <div className='form-about'>
               <div className='title'>More Information</div>
               <div className='content'>
               </div>
            </div>
            <form className='more-info' onSubmit={this.props.handleAllFormSubmit}>
               <div className='info half'>
                  <label className='middle'>Please supply any additional information about the attraction here:</label>
                  <textarea rows='5' cols='30' name='additional_info' value={attraction.additional_info} onChange={this.props.handleChange} />
               </div>
               <div className='image-upload half'>
                  <label className='middle'>Image upload:</label>
                  <div className="form_controls">
                     <div className="upload_button_holder">
                        <div className='file-input'>
                           <input type="file" id="fileElem" multiple accept="image/*" onChange={this.handleFileSelected} />
                        </div>
                        <button type='button' id='fileSelect' onClick={this.handleFileUpload}>Upload</button>
                        <div className='progress'>
                           {this.state.fileReady ? <i className="fas fa-check-circle" style={{ color: 'steelblue' }}></i> : null}
                        </div>
                     </div>
                  </div>
               </div>
               <div className='submit'>
                  <input type='submit' value='SUBMIT' />
               </div>
            </form>
         </div>
      )
   }

}