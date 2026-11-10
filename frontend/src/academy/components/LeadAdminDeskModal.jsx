import React, { useState } from 'react';
import { Icon } from '../../common/icons';

export const LeadAdminDeskModal = ({ leads, onClose, onUpdateStatus }) => {
  const [filterProg, setFilterProg] = useState('ALL');

  const filteredLeads = leads.filter((l) => {
    if (filterProg !== 'ALL' && l.programmeId !== filterProg) return false;
    return true;
  });

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="academy-modal" style={{ maxWidth: '920px' }} onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--acad-border)', paddingBottom: '1.25rem', marginBottom: '1.5rem' }}>
          <div>
            <div className="academy-pre-title">Admissions Operations Desk</div>
            <h3 style={{ fontFamily: 'var(--acad-serif)', fontSize: '1.65rem', color: 'var(--acad-text)' }}>
              Student Inquiries & Applications
            </h3>
          </div>
          <button onClick={onClose} style={{ color: 'var(--acad-text-muted)', padding: '0.25rem' }}>
            <Icon name="close" size={20} />
          </button>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ fontSize: '0.9rem', color: 'var(--acad-text-body)' }}>
            Total Inquiries: <strong>{leads.length}</strong>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--acad-text-muted)', fontWeight: 600 }}>Filter Track:</span>
            <select
              className="academy-input"
              style={{ padding: '0.45rem 0.85rem', fontSize: '0.825rem', width: 'auto' }}
              value={filterProg}
              onChange={(e) => setFilterProg(e.target.value)}
            >
              <option value="ALL">All Tracks</option>
              <option value="ai-productivity">AI Productivity</option>
              <option value="ai-automation-nocode">No-Code AI Automation</option>
              <option value="prompt-engineering">Prompt Engineering</option>
              <option value="practical-web-ai">Practical Web AI</option>
              <option value="ai-business-ops">AI Business Ops</option>
            </select>
          </div>
        </div>

        {filteredLeads.length === 0 ? (
          <div style={{ background: 'var(--acad-surface-alt)', border: '1px solid var(--acad-border)', borderRadius: '10px', padding: '3rem 2rem', textAlign: 'center' }}>
            <p style={{ color: 'var(--acad-text-muted)', fontSize: '0.9rem' }}>No student inquiries found for this filter.</p>
          </div>
        ) : (
          <div style={{ overflowX: 'auto', border: '1px solid var(--acad-border)', borderRadius: '10px' }}>
            <table className="admin-leads-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Applicant</th>
                  <th>Contact Info</th>
                  <th>Track</th>
                  <th>Background</th>
                  <th>Admissions Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredLeads.map((lead) => (
                  <tr key={lead.id}>
                    <td style={{ fontWeight: 600, color: 'var(--acad-cobalt)', fontSize: '0.8rem' }}>
                      {lead.id}
                    </td>
                    <td>
                      <strong style={{ color: 'var(--acad-text)' }}>{lead.fullName}</strong>
                      <div style={{ fontSize: '0.775rem', color: 'var(--acad-text-muted)' }}>{lead.currentRole || 'Learner'}</div>
                    </td>
                    <td>
                      <div>{lead.email}</div>
                      <div style={{ fontSize: '0.775rem', color: 'var(--acad-text-muted)' }}>{lead.phone}</div>
                    </td>
                    <td>
                      <span className="tool-tag" style={{ color: 'var(--acad-cobalt)', borderColor: '#BFDBFE' }}>
                        {lead.programmeId}
                      </span>
                    </td>
                    <td style={{ fontSize: '0.8rem', color: 'var(--acad-text-body)' }}>
                      {lead.experienceLevel}
                    </td>
                    <td>
                      <select
                        style={{
                          background: '#FFFFFF',
                          color: lead.status === 'ENROLLED' ? '#10B981' : lead.status === 'INTERVIEWING' ? '#2563EB' : '#F59E0B',
                          border: '1px solid var(--acad-border)',
                          borderRadius: '6px',
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          padding: '0.3rem 0.6rem'
                        }}
                        value={lead.status}
                        onChange={(e) => onUpdateStatus(lead.id, e.target.value)}
                      >
                        <option value="NEW">NEW</option>
                        <option value="INTERVIEWING">IN REVIEW</option>
                        <option value="ENROLLED">ENROLLED</option>
                        <option value="ARCHIVED">ARCHIVED</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-end' }}>
          <button className="academy-btn-primary" onClick={onClose}>
            Close Desk
          </button>
        </div>
      </div>
    </div>
  );
};
