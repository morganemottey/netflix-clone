import React, { Component } from 'react'
import '../css/Searchbar.css'

export default class Searchbar extends Component {
    render() {
        return (
            <div>
            <div class="card mb-4">
                <div class="card-body">
                    <form>
                        <div class="form-group row">
                            <label for="inputSearch" className="form-label"></label>
                            <div class="col-sm-12">
                                <input type="text" placeholder="Rechercher un film" class="form-95" id="inputSearch"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        )
    }
}
