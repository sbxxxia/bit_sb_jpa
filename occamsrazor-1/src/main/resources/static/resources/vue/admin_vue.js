"use strict"
var adminVue = {
		join : () => {
			return `
			<table id="regi_profile">
			<tr>
				<td rowspan="4" id="photo"><img alt="" src="data:image/png;base64,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"><br>
				<br>
				<button id="regi_photo">사진 등록</button>
				</td>
				<td>
					<table id="profile_card">
						<tr><td><label>이름 </label></td>
							<td><input id="name" type="text"/></td></tr>
						<tr><td><label>직급</label></td>
							<td><input id="position" type="text"/></td></tr>
						<tr><td><label>이메일</label></td>
							<td><input id="email" type="text"/></td></tr>
						<tr><td><label>전화번호</label></td>
							<td><input id="phoneNumber" type="text"/></td></tr>
					</table>
				</td>
			<tr style="height: 20%">
		     <td id="button_box">
		     
		       
		     </td>
		   </tr>
		</table>
		`
		},
		login : () => {
			return `
			<table id="regi_profile">
			<tr>
				<td>
					<table id="login_card">
						<tr><td><label>ID </label></td>
							<td><input id="userid" type="text"/></td></tr>
						<tr><td><label>PW</label></td>
							<td><input id="passwd" type="text"/></td></tr>
					</table>
				</td>
			<tr style="height: 20%">
		     <td id="login_box">
		     
		       
		     </td>
		   </tr>
		</table>
		`
			
		}
}