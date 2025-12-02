const jobs = [
  { id:'job-1', title:'Frontend Developer', company:{name:'Acme Co'}, location:'Doha, Qatar', description:'<p>Build React apps</p>', source:'Example', apply_url:'https://example.com/apply/1', type:'fulltime' },
  { id:'job-2', title:'Backend Engineer', company:{name:'BetaCo'}, location:'Riyadh, KSA', description:'<p>Build APIs</p>', source:'Example', apply_url:'https://example.com/apply/2', type:'remote' },
  { id:'job-3', title:'Nurse', company:{name:'HMC'}, location:'Doha, Qatar', description:'<p>Care patients</p>', source:'Example', apply_url:'https://example.com/apply/3', type:'fulltime' }
];

export default function handler(req, res) {
  const q = (req.query.q || '').toLowerCase();
  const location = (req.query.location || '').toLowerCase();
  const type = (req.query.type || '').toLowerCase();

  const results = jobs.filter(j => {
    const matchQ = !q || j.title.toLowerCase().includes(q) || j.company.name.toLowerCase().includes(q);
    const matchLoc = !location || j.location.toLowerCase().includes(location);
    const matchType = !type || type === 'any' || j.type.includes(type);
    return matchQ && matchLoc && matchType;
  });

  res.status(200).json({ total: results.length, results });
}
