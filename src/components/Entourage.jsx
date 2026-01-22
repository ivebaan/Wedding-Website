import React from 'react';
import './Entourage.css';

const Entourage = ({ title, sponsors, bestMan, groomsmen, maidsOfHonor, bridesmaids, secondarySponsors, image }) => {
  return (
    <section className="entourage" id="entourage">
      <h2 className="section-title">{title}</h2>
      <div className="entourage-container">
        {/* Left Side - Formal Invitation Card */}
        <div className="invitation-card">
          <div className="floral-border">
            <div className="monogram">K & J</div>
            <p className="invitation-subtitle">Together with our parents</p>
            
            <div className="parent-names">
              <p>Mr. Roberto P. Rodriguez & Mrs. Virgencita R. Rodriguez</p>
              <p>Mr. Dominador A. Duyogan, Sr. & Mrs. Felisa A. Duyogan</p>
            </div>
            
            <p className="invitation-we">We,</p>
            
            <h1 className="couple-names">KER JAY<br/><span className="and-text">and</span><br/>JENNIFER</h1>
            
            <p className="invitation-text">Request the honor of your presence as we unite<br/>in the Sacrament of Holy Matrimony</p>
            
            <div className="wedding-date-time">
              <p className="ceremony-date">FEBRUARY 23<sup>RD</sup> 2026</p>
              <p className="ceremony-time">one o'clock in the afternoon</p>
            </div>
            
            <div className="venue-info">
              <p className="venue-name">ARCHDIOCESAN SHRINE OF<br/>ST. THÉRÈSE OF THE CHILD JESUS</p>
              <p className="venue-address">Edison St. Cebu City</p>
            </div>
            
            <p className="reception-text">Reception to follow at</p>
            
            <div className="reception-venue">
              <p className="reception-name">CHATEAU DE BUSAY</p>
              <p className="reception-address">Lower Busay Hills, Cebu City</p>
            </div>
          </div>
        </div>
        
        {/* Right Side - Entourage List */}
        <div className="entourage-list-card">
          <h3 className="entourage-header">Rodriguez - Duyogan</h3>
          
          {sponsors && (
            <div className="entourage-section">
              <h4>PRINCIPAL SPONSORS</h4>
              <div className="sponsors-columns">
                <div className="sponsor-column">
                  {sponsors.male?.map((name, index) => (
                    <p key={index}>{name}</p>
                  ))}
                </div>
                <div className="sponsor-column">
                  {sponsors.female?.map((name, index) => (
                    <p key={index}>{name}</p>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          <div className="entourage-roles-grid">
            {bestMan && (
              <div className="role-section">
                <h4>BEST MAN</h4>
                <p>{bestMan}</p>
              </div>
            )}
            
            {maidsOfHonor && (
              <div className="role-section">
                <h4>MAIDS OF HONOR</h4>
                {maidsOfHonor.map((name, index) => (
                  <p key={index}>{name}</p>
                ))}
              </div>
            )}
          </div>
          
          <div className="entourage-roles-grid">
            {groomsmen && (
              <div className="role-section">
                <h4>GROOMSMEN</h4>
                {groomsmen.map((name, index) => (
                  <p key={index}>{name}</p>
                ))}
              </div>
            )}
            
            {bridesmaids && (
              <div className="role-section">
                <h4>BRIDESMAIDS</h4>
                {bridesmaids.map((name, index) => (
                  <p key={index}>{name}</p>
                ))}
              </div>
            )}
          </div>
          
          {secondarySponsors && (
            <div className="entourage-section secondary-section">
              <h4>SECONDARY SPONSORS</h4>
              <div className="secondary-grid">
                {Object.entries(secondarySponsors).map(([role, names], index) => (
                  <div key={index} className="secondary-role">
                    <p className="role-name">{role.toUpperCase()}</p>
                    {names.map((name, idx) => (
                      <p key={idx} className="person-name">{name}</p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Entourage;
