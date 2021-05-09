/**
 * @param {string[]} emails
 * @return {number}
 */
 var numUniqueEmails = function(emails) {
  const hashMap = {};
  
  emails.forEach(email => {
    if(email.includes('@')) {
      let [localName, domainName] = email.split('@');

      if(!domainName.includes('+')) {
        const parsed = localName.split('+')[0].replace(/(\.)/g, '') + '@' + domainName;
      
        if(!hashMap.hasOwnProperty(parsed)) {
          hashMap[parsed] = 1;
        }
      }
    }
  });

  return Object.values(hashMap).reduce((prev, curr) => prev + curr, 0);
};

module.exports = numUniqueEmails;
// console.log(numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]))
// console.log(numUniqueEmails([
//   "fg.r.u.uzj+o.pw@kziczvh.com",
//   "r.cyo.g+d.h+b.ja@tgsg.z.com",
//   "fg.r.u.uzj+o.f.d@kziczvh.com",
//   "r.cyo.g+ng.r.iq@tgsg.z.com",
//   "fg.r.u.uzj+lp.k@kziczvh.com",
//   "r.cyo.g+n.h.e+n.g@tgsg.z.com",
//   "fg.r.u.uzj+k+p.j@kziczvh.com",
//   "fg.r.u.uzj+w.y+b@kziczvh.com",
//   "r.cyo.g+x+d.c+f.t@tgsg.z.com",
//   "r.cyo.g+x+t.y.l.i@tgsg.z.com",
//   "r.cyo.g+brxxi@tgsg.z.com",
//   "r.cyo.g+z+dr.k.u@tgsg.z.com",
//   "r.cyo.g+d+l.c.n+g@tgsg.z.com",
//   "fg.r.u.uzj+vq.o@kziczvh.com",
//   "fg.r.u.uzj+uzq@kziczvh.com",
//   "fg.r.u.uzj+mvz@kziczvh.com",
//   "fg.r.u.uzj+taj@kziczvh.com",
//   "fg.r.u.uzj+fek@kziczvh.com"
// ]))
