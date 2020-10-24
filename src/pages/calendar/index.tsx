import React from "react";

export default function Calendar() {
  return (
    <div className="min-h-screen flex items-stretch p-10 bg-calendar">
      <div className="w-full bg-white rounded-login-extra shadow-sm flex overflow-hidden">
        <div className="w-1/4">
          <img
            src="https://images.unsplash.com/photo-1523546340043-9a9b68803329?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1600"
            alt="spring landscape"
            className="object-cover object-center h-full"
          />
        </div>
        <div className="flex flex-1 flex-col h-full">
          <div className="px-10 py-5 text-6xl leading-none font-thin tracking-widest">
            Janvier -{" "}
            <span className="bg-clip-text text-transparent font-light bg-calendar">
              2020
            </span>
          </div>
          <div className="h-full bg-white px-10 pb-10 flex flex-col">
            {/* Header */}
            {/* Calendar rows */}
            <div className="flex-1 flex rounded-md ">
              <div className="cal-day-not-month rounded-tl-xl">30</div>
              <div className="cal-day-not-month">31</div>
              <div className="cal-day-month">1</div>
              <div className="cal-day-month">2</div>
              <div className="cal-day-month">3</div>
              <div className="cal-day-month">4</div>
              <div className="cal-day-month border-r rounded-tr-xl">5</div>
            </div>
            <div className="flex-1 flex rounded-md">
              <div className="cal-day-month">6</div>
              <div className="cal-day-month">7</div>
              <div className="cal-day-month">8</div>
              <div className="cal-day-month">9</div>
              <div className="cal-day-month">10</div>
              <div className="cal-day-month">11</div>
              <div className="cal-day-month border-r">12</div>
            </div>
            <div className="flex-1 flex rounded-md">
              <div className="cal-day-month">13</div>
              <div className="cal-day-month">14</div>
              <div className="cal-day-month">15</div>
              <div className="cal-day-month">16</div>
              <div className="cal-day-month">17</div>
              <div className="cal-day-month">18</div>
              <div className="cal-day-month border-r">19</div>
            </div>
            <div className="flex-1 flex rounded-md">
              <div className="cal-day-month">20</div>
              <div className="cal-day-month">21</div>
              <div className="cal-day-month">22</div>
              <div className="cal-day-month">23</div>
              <div className="cal-day-month">24</div>
              <div className="cal-day-month">25</div>
              <div className="cal-day-month border-r">26</div>
            </div>
            <div className="flex-1 flex rounded-md">
              <div className="cal-day-month border-b rounded-bl-xl">27</div>
              <div className="cal-day-month border-b">28</div>
              <div className="cal-day-month border-b">29</div>
              <div className="cal-day-month border-b">30</div>
              <div className="cal-day-month border-b">31</div>
              <div className="cal-day-not-month border-b">1</div>
              <div className="cal-day-not-month border-b rounded-br-xl border-r">
                2
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
