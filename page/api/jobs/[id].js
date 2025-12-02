const jobs = [
  { id:'job-1', title:'Frontend Developer', company:{name:'Acme Co'}, location:'Doha, Qatar', description:'<p>Build React apps</p>', source:'Example', apply_url:'https://example.com/apply/1', type:'fulltime' },
  { id:'job-2', title:'Backend Engineer', company:{name:'BetaCo'}, location:'Riyadh, KSA', description:'<p>Build APIs</p>', source:'Example', apply_url:'https://example.com/apply/2', type:'remote' },
  { id:'job-3', title:'Nurse', company:{name:'HMC'}, location:'Doha, Qatar', description:'<p>Care patients</p>', source:'Example', apply_url:'https://example.com/apply/3', type:'fulltime' }
];

export default function handler(req, res) {
  const { id } = req.query;
  const job = jobs.find(j => j.id === id);
  if (!job) return res.status(404).json({ error: 'Not found' });
  res.status(200).json(job);
}
