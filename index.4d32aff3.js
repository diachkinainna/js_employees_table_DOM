var e=document.querySelector("thead"),t=document.querySelector("tbody"),n=t.rows;e.addEventListener("click",function(e){var a=e.target.closest("th");if(a){a.hasAttribute("direction")&&"desc"!==a.getAttribute("direction")?a.setAttribute("direction","desc"):a.setAttribute("direction","asc");var r=[],o=!0,i=!1,l=void 0;try{for(var c,u=n[Symbol.iterator]();!(o=(c=u.next()).done);o=!0){var d=c.value;r.push({Name:d.cells[0].textContent,Position:d.cells[1].textContent,Office:d.cells[2].textContent,Age:d.cells[3].textContent,Salary:d.cells[4].textContent})}}catch(e){i=!0,l=e}finally{try{o||null==u.return||u.return()}finally{if(i)throw l}}var s=a.textContent.trim();r.sort(function(e,t){if("Name"===s||"Office"===s||"Position"===s)return"asc"===a.getAttribute("direction")?e[s].localeCompare(t[s]):t[s].localeCompare(e[s]);if("Age"===s)return"asc"===a.getAttribute("direction")?parseInt(e[s])-parseInt(t[s]):parseInt(t[s])-parseInt(e[s]);if("Salary"===s){var n=parseInt(e[s].replace(/[^0-9]/g,""),10),r=parseInt(t[s].replace(/[^0-9]/g,""),10);return"asc"===a.getAttribute("direction")?n-r:r-n}}),t.innerHTML="";var m=!0,p=!1,f=void 0;try{for(var y,v=r[Symbol.iterator]();!(m=(y=v.next()).done);m=!0){var b=y.value,S=document.createElement("tr");S.innerHTML="\n      <td>".concat(b.Name,"</td>\n      <td>").concat(b.Position,"</td>\n      <td>").concat(b.Office,"</td>\n      <td>").concat(b.Age,"</td>\n      <td>").concat(b.Salary,"</td>\n    "),t.appendChild(S)}}catch(e){p=!0,f=e}finally{try{m||null==v.return||v.return()}finally{if(p)throw f}}return 0}}),t.addEventListener("click",function(e){var t=e.target.closest("tr");if(t){var a=!0,r=!1,o=void 0;try{for(var i,l=n[Symbol.iterator]();!(a=(i=l.next()).done);a=!0)i.value.classList.remove("active")}catch(e){r=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw o}}t.classList.add("active")}});var a=document.querySelector("body"),r=document.createElement("form");r.classList.add("new-employee-form"),r.innerHTML='\n  <label>Name: <input name="name" type="text" data-qa="name" required></label>\n  <label>Position: <input name="position" type="text" data-qa="position" required></label>\n  <label>Office:\n    <select name="office" data-qa="office" required>\n      <option value="Tokyo">Tokyo</option>\n      <option value="Singapore">Singapore</option>\n      <option value="London">London</option>\n      <option value="New York">New York</option>\n      <option value="Edinburgh">Edinburgh</option>\n      <option value="San Francisco">San Francisco</option>\n    </select>\n  </label>\n  <label>Age: <input name="age" type="number" data-qa="age" required></label>\n  <label>Salary: <input name="salary" type="number" data-qa="salary" required></label>\n  <button type="submit">Save to table</button>\n',a.appendChild(r);var o=function(e,t,n){var a=document.createElement("div"),r=document.createElement("h2"),o=document.createElement("p");a.classList.add("notification",n),a.setAttribute("data-qa","notification"),r.textContent=e,r.className="title",o.innerHTML=t,a.appendChild(r),a.appendChild(o),document.body.appendChild(a),setTimeout(function(){a.style.display="none"},5e3)};document.querySelector("button").addEventListener("click",function(e){if(e.preventDefault(),!r.querySelector('input[name="name"]').value||!r.querySelector('input[name="position"]').value){o("Error message","Please fill out all fields!","error");return}if(r.querySelector('input[name="name"]').value.length<4){o("Error message","Please enter a name with more than four characters.","error");return}if(r.querySelector('input[name="age"]').value<18||r.querySelector('input[name="age"]').value>90){o("Error message","Please enter an age between 18 and 90.","error");return}var n={Name:r.querySelector('input[name="name"]').value,Position:r.querySelector('input[name="position"]').value,Office:r.querySelector('select[name="office"]').value,Age:r.querySelector('input[name="age"]').value,Salary:"$"+Number(r.querySelector('input[name="salary"]').value).toLocaleString("en-US")},a=document.createElement("tr");a.innerHTML="\n    <td>".concat(n.Name,"</td>\n    <td>").concat(n.Position,"</td>\n    <td>").concat(n.Office,"</td>\n    <td>").concat(n.Age,"</td>\n    <td>").concat(n.Salary,"</td>\n  "),t.appendChild(a),o("Success message","New employee added to the table.","success"),r.reset()});
//# sourceMappingURL=index.4d32aff3.js.map