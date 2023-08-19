;(function () {
  const theHtml = `<!-- Start New Mailto-Based Contact Form -->
  <div id="contact_via_mailto" class="DNNModuleContent ModDNNGoPowerFormsC">
    <div id="dnn_ctr442_View_Index_plLicense">
      <div id="phContainer442" class="validationEngineContainer form_div_442">
        <div>
          <div class="Theme_01_Default form-align-left   dg-form-content-box form-background-load" id="form_div_442"
            style="width:100%;">
            <form id="contact_form" action="mailto:bruce@mccenergy.ca" method="get" enctype="text/plain">
            <ul class="form_list dg-form-content form-background size-default custom radius-3px  ">
              <li style="width:50%">
                <div class="form-control-wrap  row1">
                  <label for="Ctl_Discuss_442">I would like to discuss</label>
                  <div class="form_input">
                    <select name="Ctl$Discuss$442" id="Ctl_Discuss_442" title="Please select from the dropdown"
                      style="width:100%;" class="validate[maxSize[2000]]  " style="-webkit-appearance: auto; appearance: auto">
                      <option value="">(select an option)</option>
                      <option value="Facility Efficiency">Facility Efficiency</option>
                      <option value="Equipment Maintenance">Equipment Maintenance</option>
                      <option value="Solar Implementation (Technical / Financial)">Solar
                        Implementation (Technical / Financial)</option>
                      <option value="IDLE-Free Fleets">IDLE-Free Fleets</option>
                      <option value="Energy Audits">Energy Audits</option>
                      <option value="Measurement & Verification">Measurement & Verification
                      </option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </li>
              <li style="width:50%">
                <div class="form-control-wrap  row2">
                  <label for="Ctl_Name_442">Name*<span class='form_required'> *</span></label>
                  <div class="form_input">
                    <input type="text" name="Ctl$Name$442" id="Ctl_Name_442" placeholder="Name*" title="Name*"
                      class="validate[required,maxSize[2000]] required" style="width:100%;" />
                  </div>
                </div>
              </li>
              <li style="width:50%">
                <div class="form-control-wrap  row3">
                  <label for="Ctl_PhoneNumber_442">Phone Number</label>
                  <div class="form_input">
                    <input type="text" name="Ctl$PhoneNumber$442" id="Ctl_PhoneNumber_442" placeholder="Phone Number"
                      title="Phone Number" class="validate[maxSize[2000]] " style="width:100%;" />
                  </div>
                </div>
              </li>
              <li style="width:50%">
                <div class="form-control-wrap  row4">
                  <label for="Ctl_Email_442">Email*<span class='form_required'>
                      *</span></label>
                  <div class="form_input">
                    <input type="text" name="Ctl$Email$442" id="Ctl_Email_442" placeholder="Email*" title="Email*"
                      class="validate[required,maxSize[2000]] required" style="width:100%;" />
                  </div>
                </div>
              </li>
              <li class="from-footer">
                <div class="form_submit text-left">
                  <input type="submit" name="dnn$ctr442$View_Index$ctl00$SubmitButton"
                    id="dnn_ctr442_View_Index_ctl00_SubmitButton" data-verify="Submit" onclick="" title="Submit >"
                    value="Submit >" class="SubmitButton442 btn am-btn-05 btn-color3" />
                </div>
              </li>
            </ul>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End New Mailto-Based Contact Form -->
  `
  // Parse the HTML string
  const parser = new DOMParser()
  const parsedHtml = parser.parseFromString(theHtml, 'text/html')

  // Append the parsed HTML to the parent of this script
  document.currentScript.parentNode.appendChild(parsedHtml.body.firstChild)

  // for some reason querySelector('#contact_form') is null
  document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault()
    const form = event.target
    const discuss = form.querySelector('#Ctl_Discuss_442').value || "General Inquiry"
    const name = form.querySelector('#Ctl_Name_442').value
    const phoneNumber = form.querySelector('#Ctl_PhoneNumber_442').value
    const email = form.querySelector('#Ctl_Email_442').value
    window.location.href = `mailto:bruce@mccenergy.ca?subject=${encodeURIComponent(discuss)}&body=Hi Bruce,%0D%0A%0D%0AName:${encodeURIComponent(name)}%0D%0APhone Number: ${encodeURIComponent(phoneNumber)}%0D%0AEmail: ${encodeURIComponent(email)}`
  })
})()
