require 'rails_helper'

RSpec.describe "puzzles/show", type: :view do
  before(:each) do
    @puzzle = assign(:puzzle, Puzzle.create!(
      :word1 => "Word1",
      :word2 => "Word2",
      :word3 => "Word3",
      :word4 => "Word4",
      :word5 => "Word5",
      :word6 => "Word6"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Word1/)
    expect(rendered).to match(/Word2/)
    expect(rendered).to match(/Word3/)
    expect(rendered).to match(/Word4/)
    expect(rendered).to match(/Word5/)
    expect(rendered).to match(/Word6/)
  end
end
