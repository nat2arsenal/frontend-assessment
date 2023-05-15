let button = document.querySelector('.btn');

button.addEventListener('click', (e) => {
  e.preventDefault();

  //   user input values
  let date_input = document.getElementById('input-box-date').value;
  let time_input = document.getElementById('input-box-time').value;
  let duration_input = document.getElementById('input-box-duration').value;
  let age_input = document.getElementById('input-box-age').value;

  //   let inputted_date = new Date(`${date_input}`);
  //   let day_of_week = inputted_date.getDay();
  //   let month = parseInt(inputted_date.getMonth());
  //   let date = inputted_date.getDate();
  //   let year = inputted_date.getFullYear();
  //   let finalMonth = getMonth(month);
  //   let finalDayOfWeek = getDayOfWeek(day_of_week);

  //   function getMonth(month) {
  // if (month === 0) {
  //   return 'January';
  // } else if (month === 1) {
  //   return 'February';
  // } else if (month === 2) {
  //   return 'March';
  // } else if (month === 3) {
  //   return 'April';
  // } else if (month === 4) {
  //   return 'May';
  // } else if (month === 5) {
  //   return 'June';
  // } else if (month === 6) {
  //   return 'July';
  // } else if (month === 7) {
  //   return 'August';
  // } else if (month === 8) {
  //   return 'September';
  // } else if (month === 9) {
  //   return 'October';
  // } else if (month === 10) {
  //   return 'November';
  // } else if (month === 11) {
  //   return 'December';
  // }
  // switch (month) {
  //   case month === 0: {
  //     return 'January';
  //   }
  //   case month === 1: {
  //     return 'February';
  //   }
  //   case month === 2: {
  //     return 'March';
  //   }
  //   case month === 3: {
  //     return 'April';
  //   }
  //   case month === 4: {
  //     return 'May';
  //   }
  //   case month === 5: {
  //     return 'June';
  //   }
  //   case month === 6: {
  //     return 'July';
  //   }
  //   case month === 7: {
  //     return 'August';
  //   }
  //   case month === 8: {
  //     return 'September';
  //   }
  //   case month === 9: {
  //     return 'October';
  //   }
  //   case month === 10: {
  //     return 'November';
  //   }
  //   case month === 11: {
  //     return 'December';
  //   }
  //   default: {
  //     return 'default';
  //   }
  // }
  //   }

  //   function getDayOfWeek(day) {
  //     if (day === 0) {
  //       return 'Sunday';
  //     } else if (day === 1) {
  //       return 'Monday';
  //     } else if (day === 2) {
  //       return 'Tuesday';
  //     } else if (day === 3) {
  //       return 'Wednesday';
  //     } else if (day === 4) {
  //       return 'Thursday';
  //     } else if (day === 5) {
  //       return 'Friday';
  //     } else if (day === 6) {
  //       return 'Saturday';
  //     }
  //   }

  if (
    date_input === '' ||
    time_input === '' ||
    duration_input === '' ||
    age_input === ''
  ) {
    alert('Please complete input fields.');
  } else if (age_input <= 0) {
    alert('Invalid age input.');
  } else {
    document.querySelector('#second-row').innerHTML = `
    <div class="col-md-6">
      <div class="form-group">
        <label>Date</label>
        <div class="input date">
          <p>${date_input}</p>
          <input type="text" class="form-control"  disabled/>
          <div class="input-group-addon">
            <i class="far fa-calendar-alt"></i>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label>Flight Duration</label>
        <div class="input time">
          <p>${duration_input}</p>
          <input type="text" class="form-control"  disabled/>
          <div class="input-group-addon">
            <i class="far fa-clock"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="form-group">
        <label>Time<span id="remove-btn">Remove flight</span></label>
        
        <div class="input time">
        <p>${time_input}</p>
          <input type="text" class="form-control"  disabled/>
          <div class="input-group-addon">
            <i class="far fa-clock"></i>
          </div>
        </div>
      </div>
      <div class="form-group">
        <label>Age</label>
        <div class="input">
        <p>${age_input}</p>
          <input type="text" class="form-control"  disabled/>
        </div>
      </div>
    </div>
`;
    document.querySelector('#second-row').display = 'block';
  }
});
