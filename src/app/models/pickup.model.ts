export class Pickup{
  constructor(
    public api_key: string,
    public job_pickup_address: string,
    public job_pickup_email: string,
    public job_description: string,
    public job_pickup_latitude: string,
    public job_pickup_longitude: string,
    public job_pickup_name: string,
    public order_id: string,
    public job_pickup_phone: string,
    public job_pickup_datetime: string,
    public auto_assignment:string,
    public fleet_id:string,
    public geofence:string,
    public has_delivery:string,
    public has_pickup:string,
    public is_dashboard:string,
    public layout_type:string,
    public no_of_agents:string,
    public pickup_delivery_relationship:string,
    public tags: string,
    public team_id:string,
    public timezone:string,
  ) {

  }

}
