import React, { useState } from 'react';
import { Icon } from '../../common/icons';

export const EmergencySOSModal = ({ provider, onClose }) => {
  const [ambulanceDispatched, setAmbulanceDispatched] = useState(false);
  const [callerLocation, setCallerLocation] = useState('Indiranagar 100ft Road, Bengaluru');
  const [caseDescription, setCaseDescription] = useState('Acute trauma / accident');

  const targetName = provider ? provider.name : "National Critical Veterinary Triage Network";
  const emergencyPhone = provider ? provider.emergencyPhone : "+91 80 4000 9911";

  const handleDispatch = (e) => {
    e.preventDefault();
    setAmbulanceDispatched(true);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="provider-detail-modal" style={{ maxWidth: '580px', borderTop: '4px solid #C5221F' }} onClick={(e) => e.stopPropagation()}>
        <div style={{ padding: '1.5rem 1.75rem', background: '#FDF2F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#C5221F', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="emergency" size={18} />
            </div>
            <div>
              <span style={{ fontFamily: 'var(--fauna-mono)', fontSize: '0.6875rem', fontWeight: 700, color: '#C5221F', textTransform: 'uppercase' }}>
                Priority Code Red • 24/7 Clinical Triage
              </span>
              <h3 style={{ fontFamily: 'var(--fauna-serif)', fontSize: '1.35rem', color: '#1C241F' }}>
                Emergency Veterinary Dispatch
              </h3>
            </div>
          </div>
          <button className="modal-close-btn" style={{ position: 'static', background: 'rgba(0,0,0,0.08)', color: '#1C241F' }} onClick={onClose}>
            <Icon name="close" size={18} />
          </button>
        </div>

        <div style={{ padding: '1.75rem' }}>
          <div style={{ background: '#FFFFFF', border: '1px solid #F7C6BF', borderRadius: '8px', padding: '1.25rem', marginBottom: '1.5rem', textAlign: 'center' }}>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#8A968D', fontWeight: 600 }}>
              Direct Emergency Critical Line
            </span>
            <div style={{ fontFamily: 'var(--fauna-serif)', fontSize: '1.85rem', fontWeight: 700, color: '#C5221F', margin: '0.35rem 0' }}>
              {emergencyPhone}
            </div>
            <p style={{ fontSize: '0.8rem', color: '#57655B' }}>
              Connecting directly to the on-duty criticalist at <strong>{targetName}</strong>
            </p>
            <a
              href={`tel:${emergencyPhone}`}
              className="btn-emergency"
              style={{ display: 'inline-flex', marginTop: '1rem', width: '100%', justifyContent: 'center', fontSize: '0.95rem' }}
            >
              <Icon name="phone" size={18} />
              <span>Tap to Call Emergency Surgeon Immediately</span>
            </a>
          </div>

          {ambulanceDispatched ? (
            <div style={{ background: '#EEF4F0', border: '1px solid #10B981', padding: '1.25rem', borderRadius: '8px', textAlign: 'center' }}>
              <Icon name="ambulance" size={32} color="#10B981" style={{ margin: '0 auto 0.5rem' }} />
              <h4 style={{ color: '#1B382B', fontSize: '1.1rem', fontWeight: 600 }}>Ambulance Unit Dispatched</h4>
              <p style={{ fontSize: '0.825rem', color: '#57655B', marginTop: '0.25rem' }}>
                Unit #AMB-04 with portable oxygen and spinal board is en route to <strong>{callerLocation}</strong>. ETA: <strong>14 minutes</strong>.
              </p>
              <div style={{ marginTop: '0.75rem', fontSize: '0.75rem', color: '#1B382B', fontWeight: 600 }}>
                Keep patient warm, flat, and do NOT administer oral fluids.
              </div>
            </div>
          ) : (
            <form onSubmit={handleDispatch} style={{ borderTop: '1px solid #E5DFC9', paddingTop: '1.25rem' }}>
              <h4 style={{ fontSize: '0.875rem', fontWeight: 600, color: '#1B382B', marginBottom: '0.5rem' }}>
                Need An Emergency Mobile Ambulance?
              </h4>
              <p style={{ fontSize: '0.775rem', color: '#57655B', marginBottom: '1rem' }}>
                Request an urgent vehicle equipped with oxygen resuscitation and veterinary paramedics.
              </p>

              <div className="form-group">
                <label>Current Exact Location / Landmark *</label>
                <input
                  type="text"
                  required
                  className="form-input"
                  value={callerLocation}
                  onChange={(e) => setCallerLocation(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Nature of Patient Trauma *</label>
                <select
                  className="form-select"
                  value={caseDescription}
                  onChange={(e) => setCaseDescription(e.target.value)}
                >
                  <option value="Accident / Vehicular Hit">Accident / Vehicular Hit (Bleeding/Fracture)</option>
                  <option value="Severe Seizure / Collapse">Severe Seizure / Collapse / Unresponsiveness</option>
                  <option value="Suspected Poisoning / Bloat">Suspected Poisoning / Acute Bloat</option>
                  <option value="Respiratory Distress">Respiratory Distress / Gasping for Air</option>
                  <option value="Other Critical Emergency">Other Critical Emergency</option>
                </select>
              </div>

              <button type="submit" className="btn-secondary" style={{ width: '100%', justifyContent: 'center', borderColor: '#C5221F', color: '#C5221F' }}>
                <Icon name="ambulance" size={16} />
                <span>Request Urgent Ambulance Unit</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
