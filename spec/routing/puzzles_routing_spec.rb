require "rails_helper"

RSpec.describe PuzzlesController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/puzzles").to route_to("puzzles#index")
    end

    it "routes to #new" do
      expect(:get => "/puzzles/new").to route_to("puzzles#new")
    end

    it "routes to #show" do
      expect(:get => "/puzzles/1").to route_to("puzzles#show", :id => "1")
    end

    it "routes to #edit" do
      expect(:get => "/puzzles/1/edit").to route_to("puzzles#edit", :id => "1")
    end

    it "routes to #create" do
      expect(:post => "/puzzles").to route_to("puzzles#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/puzzles/1").to route_to("puzzles#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/puzzles/1").to route_to("puzzles#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/puzzles/1").to route_to("puzzles#destroy", :id => "1")
    end

  end
end
