import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as r}from"./assets/vendor-77e16229.js";const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEpSURBVHgBrZXtEcIgDIZTzp5/3URHcSPpJLpBXcVd+FPwiqQt1y+SUNv3DuUkvA+0SQQg5Jx7WOt8zsBYyudEmXsPuijg3bbtB1ipa/jQYQ+UZVmBpHjyprEvyBTGSjf52zwbssdchBxhTkI4c2vtTTJMxcwgw6RObZReXDycMSYBcTWuQX/6RqcMQpCmIOPNHbG30SKAgkjmU8AJBJ3PpQ5GOO2KCYVFGEaFa9J+EbCEDIAsc5SCTCkFPjWXlHWD2Jvw5MNP2b1HBEzN42OZvhMRwmURly1cCvfrszSlC41PxR6SKjQs3g4Qg6z9PpdBxsitIhWDXrPDcZCtWplHHQEhzY+AiOZ7IJz5qg5iWygK/wjfFwD+T18pdfXe37e0j07jTeTBPZYfWztI8097RKsAAAAASUVORK5CYII=",n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAE9SURBVHgB3VVtccMwDFUYhMHMYIUQBiuEMFgYJEwSBtsQdAx6Q+AyaBlo8vo8+3z+3PqnfXfvcrGkJymxZaJ7R1dyYOZeHqPwWaiwfBF+CD+7rjvRXyDCSriygxYewLO3vqKIMH6XEx8gYriYZIkCNiRWgW1G8l1MfA/jMSZcgie+UKIqDfY3FYfDCgdFjagRV/anUSOK4nAaw+qzO6FFHI5vZtf44gic/y0O54NhsLakkqTE5f1VOFUlSCXJVZ7SMYafQ0Px7n6TlD4LXw/ne8wwIfCpkCQnbnfiGDP2uWAvyZSxr+FODB02tKioEVxzjuBkEpg5VD0q0L3myOCLOQ+opOzsijoiZk814OtE1bZlTo/rmd1YH6gF7Oa9xZndhaO99TXXac2VqeQxCF+E9r+chF/CTa7MCz00vgGTokbYR7IkrwAAAABJRU5ErkJggg==",t=document.querySelector(".form");t.addEventListener("submit",s=>{s.preventDefault();const i=t.querySelector('input[name="delay"]'),e=parseInt(i.value),o=t.querySelector('input[name="state"]:checked').value;new Promise((A,c)=>{o==="fulfilled"?setTimeout(()=>{A(e)},e):o==="rejected"&&setTimeout(()=>{c(e)},e)}).then(A=>{r.success({title:"Ok",titleColor:"#fff",iconUrl:n,iconColor:"#fff",backgroundColor:"#59A10D",messageColor:"#fff",message:`Fulfilled promise in ${A}ms`})}).catch(A=>{r.error({title:"Error",titleColor:"#fff",iconUrl:a,iconColor:"#fff",backgroundColor:"#B51B1B",messageColor:"#fff",message:`Rejected promise in ${A}ms`})}),t.reset()});
//# sourceMappingURL=commonHelpers2.js.map