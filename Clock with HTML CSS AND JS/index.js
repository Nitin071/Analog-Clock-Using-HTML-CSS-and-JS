setInterval(()=>{
    d= new Date();
    htime=d.getHours();
    mtime=d.getMinutes();
    stime=d.getSeconds();
    hr=30*htime+mtime/2;
    mr=6*mtime+0.1*stime;
    sr=6*stime;
    hour.style.transform=`rotate(${hr+180}deg)`;
    minute.style.transform=`rotate(${mr+180}deg)`;
    second.style.transform=`rotate(${sr+180}deg)`;
    h2.style.transform=`rotate(${hr}deg)`;
    m2.style.transform=`rotate(${mr}deg)`;
    s2.style.transform=`rotate(${sr}deg)`;
    

},1000)