import React from "react";

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-col">
          <h3 style={{color:"#fff"}}>Savory Spot</h3>
          <p style={{color:"#bbb"}}>📍 123 Main Street, Food City</p>
          <p style={{color:"#bbb"}}>📞 (123) 456-7890</p>
        </div>
        <div className="footer-col">
          <h4 style={{color:"#fff"}}>Newsletter</h4>
          <div className="newsletter" style={{marginTop:8}}>
            <input placeholder="Enter your email" style={{padding:"8px 10px", borderRadius:8, border:"none", marginRight:8}} />
            <button className="btn">Subscribe</button>
          </div>
        </div>
        <div className="footer-col">
          <h4 style={{color:"#fff"}}>Follow</h4>
          <div className="social" style={{marginTop:8}}>
            <a href="#" aria-label="instagram">Instagram</a>
            <a href="#" aria-label="facebook" style={{marginLeft:8}}>Facebook</a>
          </div>
        </div>
      </div>
      <div style={{textAlign:"center", marginTop:18, color:"#777"}}>© 2025 Savory Spot. All Rights Reserved.</div>
    </footer>
  );
}
