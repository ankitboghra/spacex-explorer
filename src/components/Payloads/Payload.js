import React from 'react';

import './Payload.css'

const Payload = ({ payload }) => {
    const {
        payload_id,
        nationality,
        payload_type,
        norad_id,
        reused,
        customers,
        manufacturer,
        payload_mass_kg,
        payload_mass_lbs,
        orbit,
        orbit_params
    } = payload;
    const {
        reference_system,
        regime,
        longitude,
        semi_major_axis_km,
        eccentricity,
        periapsis_km,
        apoapsis_km,
        inclination_deg,
        period_min,
        lifespan_years,
    } = orbit_params;

    return (
        <details className="Data PayloadData" >
            <summary className="PayloadTitleSection">
                <span className="PayloadTitle">{payload_id}</span>
                <span className="PayloadNationality"> ({nationality})</span>
            </summary>

            <span className="PayloadType">{payload_type}</span>

            {manufacturer && <span>Manufactured by {manufacturer}</span>}

            <span>Condition: {reused ? 'Reused' : 'New'}</span>

            <span>
                Mass:
                {
                    (payload_mass_kg || payload_mass_lbs)
                        ? (` ${payload_mass_kg} kg (${payload_mass_lbs} lbs)`)
                        : (' Not Available')
                }
            </span>

            {norad_id && norad_id.length > 0 && <span>Norad ID: {norad_id.join(', ')}</span>}

            {customers && customers.length > 0 && <span>Customers: {customers.join(', ')}</span>}

            <span className="PayloadOrbitSection">
                {orbit && <span>Orbit: {orbit}</span>}
                {reference_system && <span>Reference system: {reference_system}</span>}
                {regime && <span>Regime: {regime}</span>}
                {longitude && <span>Longitude: {longitude}</span>}
                {semi_major_axis_km && <span>Semi major axis: {semi_major_axis_km} km</span>}
                {eccentricity && <span>Eccentricity: {eccentricity}</span>}
                {periapsis_km && <span>Periapsis: {periapsis_km} km</span>}
                {apoapsis_km && <span>Apoapsis: {apoapsis_km} km </span>}
                {inclination_deg && <span>Inclination: {inclination_deg} deg</span>}
                {period_min && <span>Period: {period_min} min</span>}
                {lifespan_years && <span>Lifespan: {lifespan_years} years</span>}
            </span>
        </details>
    )

}

export default Payload
