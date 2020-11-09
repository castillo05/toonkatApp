export class Delivery{
  constructor(
    public api_key: string,
    public order_id: string,
    public job_description: string,
    public customer_email: string,
    public customer_username: string,
    public customer_phone: string,
    public customer_address: string,
    public latitude: string,
    public longitude: string,
    public job_delivery_datetime: string,
    public custom_field_template:string,
    public team_id:string,
    public auto_assignment:string,
    public has_pickup:string,
    public has_delivery:string,
    public layout_type:string,
    public tracking_link:string,
    public timezone:string,
    public fleet_id:string,
    public notify:string,
    public tags: string,
    public geofence:string,
  ) {

  }

}
