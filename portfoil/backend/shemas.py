from marshmallow import Schema, fields

class PortfolioItemSchema(Schema):
    id = fields.Int(dump_only=True)
    title = fields.Str(required=True)
    description = fields.Str()
    image_url = fields.Str()
    project_url = fields.Str()
    tech_stack = fields.Str()
    created_at = fields.DateTime()
