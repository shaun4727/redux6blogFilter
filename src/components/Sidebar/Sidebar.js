import React from 'react'
import { useDispatch } from 'react-redux';
import {setSort,setFilter} from '../../features/filter/filterSlice';

export default function Sidebar() {
    const dispatch = useDispatch();
    const handleChange = (e) => {
        dispatch(setSort(e.target.value))
    }

    const handleRadioChange = (e) => {
        dispatch(setFilter(e.target.value))
    }

  return (
    <aside>
        <div class="sidebar-items">
        <div class="sidebar-content">
            <h4>Sort</h4>
            <select name="sort" id="lws-sort" onChange={handleChange} class="w-full max-w-[150px] border-2 rounded-md text-gray-500">
                <option value="">Default</option>
                <option value="newest">Newest</option>
                <option value="most_liked">Most Liked</option>
            </select>
        </div>
        <div class="sidebar-content">
            <h4>Filter</h4>
            <div class="radio-group">

            <div>
                <input type="radio" name="filter" id="lws-all" value="all"  class="radio" onChange={handleRadioChange}/>
                <label for="lws-all">All</label>
            </div>
            <div>
                <input type="radio" name="filter" id="lws-saved" class="radio" value="saved" onChange={handleRadioChange}/>
                <label for="lws-saved">Saved</label>
            </div>
            </div>
        </div>
        </div>
    </aside>
  )
}
