import React from "react";

const GoogleMap = () => {
  return (
    <div>
      <iframe
        title="google map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1010292.0983867473!2d-1.0543675!3d6.15662045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMDknMjMuOCJOIDHCsDAzJzAzLjgiVw!5e0!3m2!1sen!2sgh!4v1620000000000!5m2!1sen!2sgh"
        width="100%"
        height="500"
        style={{ border: 0, borderRadius: "8px", margin: "20px 0" }}
        allowFullScreen={true}  
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade" 
      ></iframe>
    </div>
  );
};

export default GoogleMap;